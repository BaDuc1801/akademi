import React, { useState, useEffect } from 'react';
import { Input, Modal, Table, Tabs } from 'antd';
import axios from 'axios';
import './StudentGrades.css';
import { CiEdit } from 'react-icons/ci';

const StudentGrades = () => {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [refreshData, setRefreshData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsData = await axios.get('http://localhost:8080/students');
                const marksData = await axios.get('http://localhost:8080/marks');
                
                const data = studentsData.data.map(student => {
                    const studentMarks = marksData.data.find(mark => mark.studentID === student.studentID);
                    return {
                        ...student,
                        ...studentMarks
                    };
                });
                
                setData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [refreshData]);

    const studentGradeA = data.filter(student => student.grade === 'VII A');
    const studentGradeB = data.filter(student => student.grade === 'VII B');
    const studentGradeC = data.filter(student => student.grade === 'VII C');

    const calculateAverage = (student) => {
        const subjects = ['chinese', 'math', 'english', 'science', 'history', 'geography'];
        const validMarks = subjects.map(subject => parseFloat(student[subject]) || 0);        
        const total = validMarks.reduce((sum, mark) => sum + mark, 0);
        return (total / validMarks.length).toFixed(2);
    };

    const columns = [
        {
            title: <span style={{ color: '#303972' }}>Name</span>,
            dataIndex: 'studentName',
            render: (_,reocord) => (
                <div style={{ width: 150, color: '#303972', fontSize: 16, fontWeight: 700 }}>
                    {reocord.studentName}
                </div>
            )
        },
        {
            title: <span style={{ color: '#303972' }}>Student ID</span>,
            dataIndex: 'studentID',
            render: (_,record) => (
                <div style={{ width: 60, color: '#303972', fontSize: 16, fontWeight: 700 }}>
                    {record.studentID}
                </div>
            )
        },
        {
            title: <span style={{ color: '#303972' }}>Chinese</span>,
            dataIndex: 'chinese',
            render: (chinese) => chinese !== undefined ? chinese : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>Math</span>,
            dataIndex: 'math',
            render: (math) => math !== undefined ? math : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>English</span>,
            dataIndex: 'english',
            render: (english) => english !== undefined ? english : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>Science</span>,
            dataIndex: 'science',
            render: (science) => science !== undefined ? science : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>History</span>,
            dataIndex: 'history',
            render: (history) => history !== undefined ? history : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>Geography</span>,
            dataIndex: 'geography',
            render: (geography) => geography !== undefined ? geography : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>Average</span>,
            dataIndex: 'marks',
            render: (_, marks) => marks ? calculateAverage(marks) : 'N/A',
        },
        {
            title: <span style={{ color: '#303972' }}>Action</span>,
            dataIndex: 'action',
            align: 'right',
            render: (_, record) => (
                <CiEdit
                    style={{ fontSize: 20, cursor: 'pointer', color: '#4D44B5' }}
                    onClick={() => onEditStudent(record)}
                />
            ),
        },
    ];

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };

    const handleOk = async () => {
        try {
            await axios.put(`http://localhost:8080/marks/update-mark/${editingStudent.studentID}`, editingStudent);
            
            const timelineContent = `Teacher TC001 has edited mark of student ${editingStudent.studentID} - ${editingStudent.studentName}`;

            await axios.post("http://localhost:8080/timeline", {
                content: timelineContent,
                date: new Date().toISOString(),
                teacherID: "TC001",
            });
                setData(prevData => prevData.map(student => 
                student.studentID === editingStudent.studentID ? { ...editingStudent } : student
            ));
            } catch (error) {
            console.error("Error updating student:", error);
        }
        setIsEditing(false);
    };
    

    const handleInputChange = (subject) => (e) => {
        const value = parseFloat(e.target.value) || 0;
        setEditingStudent(prev => ({
            ...prev,
            [subject]: value
        }));
    };

    const items = [
        {
            key: '1',
            label: 'VII A',
            children: (
                <Table
                    columns={columns}
                    dataSource={studentGradeA}
                    pagination={{ pageSize: 5 }}
                    rowKey="_id"
                />
            ),
        },
        {
            key: '2',
            label: 'VII B',
            children: (
                <Table
                    columns={columns}
                    dataSource={studentGradeB}
                    pagination={{ pageSize: 5 }}
                    rowKey="_id"
                />
            ),
        },
        {
            key: '3',
            label: 'VII C',
            children: (
                <Table
                    columns={columns}
                    dataSource={studentGradeC}
                    pagination={{ pageSize: 5 }}
                    rowKey="_id"
                />
            ),
        },
    ];

    return (
        <div className='tc-grade-all'>
            <Tabs defaultActiveKey="1" items={items} />
            <Modal
                title={<span style={{ color: "#303972" }}>Edit Student</span>}
                open={isEditing}
                okText="Save"
                okButtonProps={{ style: { backgroundColor: '#4D44B5' } }}
                onCancel={resetEditing}
                onOk={handleOk}
            >
                <p style={{ color: '#4D44B5' }}>Chinese:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.chinese || ''}
                    onChange={handleInputChange('chinese')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Math:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.math || ''}
                    onChange={handleInputChange('math')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>English:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.english || ''}
                    onChange={handleInputChange('english')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Science:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.science || ''}
                    onChange={handleInputChange('science')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>History:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.history || ''}
                    onChange={handleInputChange('history')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Geography:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.geography || ''}
                    onChange={handleInputChange('geography')}
                />
            </Modal>
        </div>
    );
};

export default StudentGrades;
