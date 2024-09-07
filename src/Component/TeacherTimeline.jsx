import { Timeline } from 'antd';
import React from 'react';

const groupTimelineItemsByDate = (items) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0, 0, 0, 0);

    const groupedItems = {
        Today: [],
        Yesterday: [],
        Older: []
    };

    items.forEach(item => {
        const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
        if (itemDate === today) {
            groupedItems.Today.push(item);
        } else if (itemDate === yesterday) {
            groupedItems.Yesterday.push(item);
        } else {
            groupedItems.Older.push(item);
        }
    });

    return groupedItems;
};

const timelineItems = [
    { content: 'Create a services site', date: '2024-09-04' },
    { content: 'Solve initial network problems', date: '2024-09-03' },
    { content: 'Technical testing', date: '2024-09-01' },
    { content: 'Network problems being solved', date: '2023-09-02' },
    { content: 'Network problems being', date: '2024-09-04' },
];

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const TeacherTimeline = () => {
    const groupedItems = groupTimelineItemsByDate(timelineItems);

    return (
        <div className='tc-bg-timeline'>
            <Timeline>
                {groupedItems.Today.length > 0 && (
                    <>
                        <Timeline.Item className="no-dot">
                            <h3 style={{color:'#303972', fontSize:22, fontWeight:700}}>Today</h3>
                        </Timeline.Item>
                        {groupedItems.Today.map((item, index) => (
                            <Timeline.Item key={index}>
                                <p className='tc-bg-timeline-date'>{formatDate(item.date)}</p>
                                <div style={{color:'#303972', fontWeight: 500, fontSize: 18}}>{item.content}</div>
                            </Timeline.Item>
                        ))}
                    </>
                )}

                {groupedItems.Yesterday.length > 0 && (
                    <>
                        <Timeline.Item className="no-dot">
                            <h3 style={{color:'#303972', fontSize:22, fontWeight:700, marginTop: 50}}>Yesterday</h3>
                        </Timeline.Item>
                        {groupedItems.Yesterday.map((item, index) => (
                            <Timeline.Item key={index}>
                                <p className='tc-bg-timeline-date'>{formatDate(item.date)}</p>
                                <div style={{color:'#303972', fontWeight: 500, fontSize: 18}}>{item.content}</div>
                            </Timeline.Item>
                        ))}
                    </>
                )}

                {groupedItems.Older.length > 0 && (
                    <>
                        <Timeline.Item className="no-dot">
                            <h3 style={{color:'#303972', fontSize:22, fontWeight:700, marginTop: 50}}>Older</h3>
                        </Timeline.Item>
                        {groupedItems.Older.map((item, index) => (
                            <Timeline.Item key={index}>
                                <p className='tc-bg-timeline-date'>{formatDate(item.date)}</p>
                                <div style={{color:'#303972', fontWeight: 500, fontSize: 18}}>{item.content}</div>
                            </Timeline.Item>
                        ))}
                    </>
                )}
            </Timeline>
        </div>
    );
};

export default TeacherTimeline;
