import { Button, Form, Input } from 'antd'
import React from 'react'

const UserTeacher = () => {
    return (
        <div>
            <Form
                layout="vertical"
                className="tc-add-std-detail"
            >
                <div className="tc-add-std-head">
                    <p>Student Details</p>
                </div>
                <table className="tc-table-input">
                    <tr>
                        <td rowSpan={2} style={{ verticalAlign: 'top', width: 180, paddingRight: 40 }}>
                            <p>Photo</p>
                            <div className="tc-add-photo">
                                {/* {imagePreview ? (
                                    <img src={imagePreview} alt="Selected" style={{ width: '100%', height: '100%' }} />
                                ) : (
                                    <p>Drag and drop or click here to select file</p>
                                )} */}
                            </div>
                        </td>
                        <td style={{ width: 450, paddingRight: 40 }}>
                            <Form.Item
                                name="studentName"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Name</p>}
                                rules={[{ required: true, message: 'Please input student name!' }]}
                            >
                                <Input placeholder="Samantha William" />
                            </Form.Item>
                        </td>
                        <td style={{ width: 400 }}>
                            <Form.Item
                                name="grade"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Teacher ID</p>}
                                rules={[{ required: true, message: 'Please input grade!' }]}
                            >
                                <Input placeholder="VII A" />
                            </Form.Item>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <Form.Item
                                name="dateOfBirth"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Date of Birth</p>}
                                rules={[{ required: true, message: 'Please input birth date!' }]}
                            >
                                <Input placeholder="Date of Birth" />
                            </Form.Item>
                        </td>
                        <td>
                            <Form.Item
                                name="city"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Grade</p>}
                                rules={[{ required: true, message: 'Please input birth place!' }]}
                            >
                                <Input placeholder="Place of Birth" />
                            </Form.Item>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <Form.Item
                                name="email"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Email</p>}
                                rules={[{ required: true, message: 'Please input email!' }]}
                            >
                                <Input placeholder="william@gmail.com" />
                            </Form.Item>
                        </td>
                        <td>
                            <Form.Item
                                name="phone"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Phone Number</p>}
                                rules={[{ required: true, message: 'Please input student phone number!' }]}
                            >
                                <Input placeholder="+1234567890" />
                            </Form.Item>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ paddingRight: 40 }}>
                            <Form.Item
                                name="address"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Address</p>}
                                rules={[{ required: true, message: 'Please input address!' }]}
                            >
                                <Input.TextArea placeholder="Enter your address here" />
                            </Form.Item>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <Button type="primary" htmlType="submit" className="tc-table-sm">
                                    Save
                                </Button>
                            </div>
                        </td>
                    </tr>
                </table>
            </Form>
        </div>
    )
}

export default UserTeacher
