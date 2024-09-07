import React, { useState } from 'react';
import { Input, Modal, Table, Tabs } from 'antd';
import './StudentGrades.css';
import dataStudent from '../dataStudents.js';
import { CiEdit } from 'react-icons/ci';

const StudentGrades = () => {
    const [data, setData] = useState(dataStudent);
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const studentGradeA = data.filter(student => student.grade === 'VII A');
    const studentGradeB = data.filter(student => student.grade === 'VII B');
    const studentGradeC = data.filter(student => student.grade === 'VII C');

    const calculateAverage = (marks) => {
        const { chinese, math, english, science, history, geography } = marks;
        const total = [chinese, math, english, science, history, geography]
            .reduce((sum, mark) => sum + (parseFloat(mark) || 0), 0);
        const count = 6; 
        return (total / count).toFixed(2); 
    };

    const columns = [
        {
            title: <span style={{ color: '#303972' }}>Name</span>,
            dataIndex: 'name',
            render: (text) => (
                <div style={{width: 150, color: '#303972', fontSize: 16, fontWeight: 700}}>{text}</div>
            )
        },
        {
            title: <span style={{ color: '#303972' }}>Chinese</span>,
            dataIndex: 'marks',
            render: (marks) => marks.chinese,
        },
        {
            title: <span style={{ color: '#303972' }}>Math</span>,
            dataIndex: 'marks',
            render: (marks) => marks.math,
        },
        {
            title: <span style={{ color: '#303972' }}>English</span>,
            dataIndex: 'marks',
            render: (marks) => marks.english,
        },
        {
            title: <span style={{ color: '#303972' }}>Science</span>,
            dataIndex: 'marks',
            render: (marks) => marks.science,
        },
        {
            title: <span style={{ color: '#303972' }}>History</span>,
            dataIndex: 'marks',
            render: (marks) => marks.history,
        },
        {
            title: <span style={{ color: '#303972' }}>Geography</span>,
            dataIndex: 'marks',
            render: (marks) => marks.geography,
        },
        {
            title: <span style={{ color: '#303972' }}>Average</span>,
            dataIndex: 'marks',
            render: (marks) => calculateAverage(marks),
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

    const handleOk = () => {
        setData(prevData => prevData.map(student =>
            student.id === editingStudent.id ? editingStudent : student
        ));
        resetEditing();
    };

    const handleInputChange = (subject) => (e) => {
        const value = parseFloat(e.target.value) || 0; 
        setEditingStudent(prev => ({
            ...prev,
            marks: { ...prev.marks, [subject]: value }
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
                    rowKey="id" 
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
                    rowKey="id" 
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
                    rowKey="id" 
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
                    value={editingStudent?.marks?.chinese || ''}
                    onChange={handleInputChange('chinese')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Math:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.marks?.math || ''}
                    onChange={handleInputChange('math')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>English:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.marks?.english || ''}
                    onChange={handleInputChange('english')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Science:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.marks?.science || ''}
                    onChange={handleInputChange('science')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>History:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.marks?.history || ''}
                    onChange={handleInputChange('history')}
                />
                <p style={{ marginTop: 10, color: '#4D44B5' }}>Geography:</p>
                <Input
                    style={{ color: '#303972' }}
                    value={editingStudent?.marks?.geography || ''}
                    onChange={handleInputChange('geography')}
                />
            </Modal>
        </div>
    );
};

export default StudentGrades;
