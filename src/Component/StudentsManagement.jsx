import { Col, Input, Modal, Row } from 'antd'
import React, { useState } from 'react'
import './StudentsManagement.css'
import { FaPlus } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { Menu } from 'antd';
import { Table } from 'antd';
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
import { Link, useOutletContext } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import dataStudent from '../dataStudents.js'

const StudentsManagement = () => {
    const { setActiveItem } = useOutletContext();
    const items = [
        {
            key: 'sub1',
            label: 'Newest',
            children: [
                {
                    key: '1',
                    label: 'Newest',
                },
                {
                    key: '2',
                    label: 'Option 2',
                },
                {
                    key: '3',
                    label: 'Option 3',
                },
            ],
        },
    ];

    const columns = [
        {
            title: <span style={{ color: '#303972' }}>Name</span>,
            dataIndex: 'name',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 200 }}>
                    <div className='tc-avt-table'></div>
                    <span style={{ marginLeft: 8, color: '#303972', fontSize: '16px', fontWeight: '700' }}>{text}</span>
                </div>)
        },
        {
            title: <span style={{ color: '#303972' }}>ID</span>,
            dataIndex: 'id',
            render: (text) => (
                <div style={{ width: 80 }}>
                    <span style={{ color: '#4D44B5', fontSize: '16px', fontWeight: '700' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>Date</span>,
            dataIndex: 'date',
            render: (text) => (
                <div style={{ width: 130 }}>
                    <span style={{ color: '#A098AE', fontSize: '14px' }}>{text}</span>
                </div>
            ),
        },
        {
            title: <span style={{ color: '#303972' }}>Parent Name</span>,
            dataIndex: 'parent',
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
                if (text == "VII A") {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#FB7D5B', padding: '10px 20px', borderRadius: 20 }}>
                            <div>{text}</div>
                        </div>
                    )
                } else if (text == "VII B") {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#FCC43E', padding: '10px 20px', borderRadius: 20 }}>
                            <div>{text}</div>
                        </div>)
                } else {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', backgroundColor: '#4D44B5', padding: '10px 20px', borderRadius: 20 }}>
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
                    <>
                        <CiEdit style={{ fontSize: 20, cursor: 'pointer', color: '#4D44B5' }} onClick={() => { onEditStudent(record) }} />
                        <MdDeleteOutline onClick={() => {
                            onDelStudent(record)
                        }} style={{ color: 'red', cursor: 'pointer', marginLeft: 10, fontSize: 20 }} />
                    </>
                )
            }
        },
    ];
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [listStudent, setListStudent] = useState(dataStudent)


    const onDelStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okType: 'danger',
            okText: 'Yes',
            onOk: () => {
                setListStudent((pre) => {
                    return pre.filter((std) => std.id !== record.id)
                })
            },
        })
    }

    const onEditStudent = (record) => {
        setIsEditing(true)
        setEditingStudent({ ...record })
    }

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    }
    return (
        <Col className='tc-sm-body'>
            <Row className='tc-flex-layout'>
                <div className='tc-search-layout'>
                    <IoSearch />
                    <input placeholder='Search here...'></input>
                </div>
                <div className='tc-sth-layout'>
                    <div className='tc-filter'>
                        <Menu
                            style={{
                                width: 256,
                            }}
                            mode="inline"
                            items={items}
                        />
                    </div>
                    <div className='tc-add-std'>
                        <Link className='tc-link' to='/students/add' onClick={() => {
                            setActiveItem('Add New Student')
                        }}><FaPlus /><span className='gap-plus'>New Student</span></Link>
                    </div>
                </div>
            </Row>
            <Row style={{ marginTop: 40 }}>
                <Table
                    style={{ width: '100%' }}
                    columns={columns}
                    dataSource={listStudent}
                    pagination={{ pageSize: 5 }}
                />
                <Modal
                    title=<span style={{ color: "#303972" }}>Edit Student</span>
                    open={isEditing}
                    okText="Save"
                    okButtonProps={{ style: { backgroundColor: '#4D44B5' } }}
                    onCancel={() =>
                        resetEditing()
                    }
                    onOk={() => {
                        setListStudent(pre => {
                            return pre.map(std => {
                                if (std.id === editingStudent.id) {
                                    return editingStudent
                                } else {
                                    return std
                                }
                            })
                        })
                        resetEditing()
                    }}
                >
                    <p style={{color: '#4D44B5'}}>Name:</p>
                    <Input style={{color: '#303972'}} value={editingStudent?.name} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, name: e.target.value }
                        })
                    }} />
                    <p style={{ marginTop: 10, color: '#4D44B5' }}>Date:</p>
                    <Input style={{color: '#303972'}} value={editingStudent?.date} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, date: e.target.value }
                        })
                    }} />
                    <p style={{ marginTop: 10, color: '#4D44B5' }}>Parent Name:</p>
                    <Input style={{color: '#303972'}} value={editingStudent?.parent} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, parent: e.target.value }
                        })
                    }} />
                    <p style={{ marginTop: 10, color: '#4D44B5' }}>City:</p>
                    <Input style={{color: '#303972'}} value={editingStudent?.city} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, city: e.target.value }
                        })
                    }} />
                </Modal>
            </Row>
        </Col >
    )
}

export default StudentsManagement
