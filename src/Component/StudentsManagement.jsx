import { Col, Modal, Row, Input, Button, Select, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import './StudentsManagement.css'
import { FaPlus } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { Table } from 'antd';
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
import { Link, useOutletContext } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import axios from 'axios'
import { Option } from 'antd/es/mentions'

const StudentsManagement = () => {
    const { setActiveItem } = useOutletContext();
    const [refreshData, setRefreshData] = useState(false); 
    const [students, setStudents] = useState([]);
    const [isEditing, setIsEditing] = useState(false); 
    const [editingStudent, setEditingStudent] = useState(null); 
    const [searchStudentInput, setSearchStudentInput] = useState(''); 

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:8080/students");
                setStudents(response.data);  
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, [refreshData]);

    // input search
    const filteredStudents = students.filter(student => 
        student.studentName.toLowerCase().includes(searchStudentInput.toLowerCase())
    );

    const columns = [
        {
            title: <span style={{ color: '#303972' }}>Name</span>,
            dataIndex: 'studentName',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 200 }}>
                    <div className='tc-avt-table'></div>
                    <span style={{ marginLeft: 8, color: '#303972', fontSize: '16px', fontWeight: '700' }}>{text}</span>
                </div>)
        },
        {
            title: <span style={{ color: '#303972' }}>ID</span>,
            dataIndex: 'studentID',
            render: (text) => (
                <div style={{ width: 57 }}>
                    <span style={{ color: '#4D44B5', fontSize: '16px', fontWeight: '700' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>Date</span>,
            dataIndex: 'dateOfBirth',
            render: (text) => (
                <div style={{ width: 120 }}>
                    <span style={{ color: '#A098AE', fontSize: '14px' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>Parent Name</span>,
            dataIndex: 'parentName',
            render: (text) => (
                <div style={{ width: 130 }}>
                    <span style={{ color: '#303972', fontSize: '16px' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>City</span>,
            dataIndex: 'city',
            render: (text) => (
                <div style={{ width: 100 }}>
                    <span style={{ color: '#303972', fontSize: '16px' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>Contact</span>,
            dataIndex: 'contact',
            render: () => (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 15, fontSize: 20, color: '#4D44B5', cursor: 'pointer' }}>
                    <div className='tc-sss'><FiPhone /></div>
                    <div className='tc-sss'><TfiEmail /></div>
                </div>
            )
        },
        {
            title: <span style={{ color: '#303972' }}>Grade</span>,
            dataIndex: 'grade',
            render: (text) => {
                if (text === "VII A") {
                    return (
                        <div style={{width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#FB7D5B', padding: '10px 20px', borderRadius: 20 }}>
                            <div>{text}</div>
                        </div>
                    )
                } else if (text === "VII B") {
                    return (
                        <div style={{width: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#FCC43E', padding: '10px 20px', borderRadius: 20 }}>
                            <div>{text}</div>
                        </div>)
                } else {
                    return (
                        <div style={{width: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#4D44B5', padding: '10px 20px', borderRadius: 20 }}>
                            <div>{text}</div>
                        </div>)
                }
            }
        },
        {
            title: <span style={{ color: '#303972' }}>Action</span>,
            dataIndex: 'action',
            align: 'right',
            render: (_, record) => {
                return (
                    <div style={{width: 50}}>
                        <CiEdit style={{ fontSize: 20, cursor: 'pointer', color: '#4D44B5' }} onClick={() => { onEditStudent(record) }} />
                        <MdDeleteOutline onClick={() => {
                            onDelStudent(record)
                        }} style={{ color: 'red', cursor: 'pointer', marginLeft: 10, fontSize: 20 }} />
                    </div>
                )
            }
        },
    ];

    const itemsTab = [
        {
            key: '1',
            label: 'VII A',
            children: (
                <Table
                    style={{ width: '100%' }}
                    columns={columns}
                    dataSource={filteredStudents.filter(student => student.grade === "VII A")}
                    pagination={{ pageSize: 5 }}
                    scroll={{ x: 1070 }} 
                />
            ),
        },
        {
            key: '2',
            label: 'VII B',
            children: (
                <Table
                    columns={columns}
                    dataSource={filteredStudents.filter(student => student.grade === "VII B")}
                    pagination={{ pageSize: 5 }}
                    rowKey="id"
                    scroll={{ x: 1070 }} 
                />
            ),
        },
        {
            key: '3',
            label: 'VII C',
            children: (
                <Table
                    columns={columns}
                    dataSource={filteredStudents.filter(student => student.grade === "VII C")}
                    pagination={{ pageSize: 5 }}
                    rowKey="id"
                    scroll={{ x: 1070 }} 
                />
            ),
        },
    ];

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8080/students/update-student/${editingStudent.studentID}`, editingStudent);
            setIsEditing(false);
            setRefreshData(prev => !prev);
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <Col className='tc-sm-body'>
            <Row className='tc-flex-layout'>
                <div className='tc-search-layout'>
                    <IoSearch />
                    <Input
                        placeholder='Search here...'
                        value={searchStudentInput}
                        onChange={(e) => setSearchStudentInput(e.target.value)} 
                        style={{ width: 350 }}
                        className=''
                    />
                </div>
                <div className='tc-sth-layout'>
                    <div className='tc-add-std'>
                        <Link className='tc-link' to='/students/add' onClick={() => {
                            setActiveItem('Add New Student')
                        }}><FaPlus /><span className='gap-plus'>New Student</span></Link>
                    </div>
                </div>
            </Row>
            <Row style={{ marginTop: 40, backgroundColor: 'white', padding: "10px 20px", borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                <Tabs defaultActiveKey="1" items={itemsTab} />
            </Row>

            <Modal
                title="Edit Student"
                open={isEditing}
                onCancel={() => setIsEditing(false)}
                onOk={handleSave} 
                okButtonProps={{ style: { backgroundColor: '#4D44B5' } }}
            >
                <p>Name:</p>
                <Input
                    value={editingStudent?.studentName}
                    onChange={(e) => setEditingStudent({ ...editingStudent, studentName: e.target.value })}
                />
                <p>Date of Birth:</p>
                <Input
                    value={editingStudent?.dateOfBirth}
                    onChange={(e) => setEditingStudent({ ...editingStudent, dateOfBirth: e.target.value })}
                />
                <p>Parent Name:</p>
                <Input
                    value={editingStudent?.parentName}
                    onChange={(e) => setEditingStudent({ ...editingStudent, parentName: e.target.value })}
                />
                <p>City:</p>
                <Input
                    value={editingStudent?.city}
                    onChange={(e) => setEditingStudent({ ...editingStudent, city: e.target.value })}
                />
                <p>Grade:</p>
                <Select
                    value={editingStudent?.grade}
                    style={{ width: '100%' }}
                    onChange={(value) => setEditingStudent({ ...editingStudent, grade: value })}
                >
                    <Option value="VII A">VII A</Option>
                    <Option value="VII B">VII B</Option>
                    <Option value="VII C">VII C</Option>
                </Select>
            </Modal>
        </Col>
    )
}

export default StudentsManagement;
