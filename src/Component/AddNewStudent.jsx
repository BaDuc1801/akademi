import React, { useState } from 'react';
import './AddNewStudent.css';
import { Radio, Modal, Form, Input, Button, message } from 'antd';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const AddNewStudent = () => {
    const [form] = Form.useForm();
    const [valueRadio, setValueRadio] = useState(1); // Default value for the radio button
    const [selectedImage, setSelectedImage] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    // Handle radio button change
    const onChangeRadio = (e) => {
        setValueRadio(e.target.value);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file); // Store the selected file in state
        }
    };

    // Trigger the file input when the div is clicked
    const handleFileSelectClick = () => {
        document.getElementById('file-input').click();
    };

    // Handle form submission
    const handleSubmit = async (values) => {
        // Creating a FormData object to append form data and the file
        // Open the confirmation modal
        setOpenModal(true);
        values.avatar = selectedImage.name;
        let data = await axios.put("http://localhost:8080/students/update-student", values);
        console.log('Submitted Data:', data);
    };

    // Handle modal "Yes" button
    const handleOk = () => {
        form.resetFields(); // Reset form to initial values
        setSelectedImage(null); // Reset selected image
        setValueRadio(1); // Reset radio button to default (Cash)
        setOpenModal(false); // Close modal
    };

    // Handle Cancel button to reset form
    const handleCancel = () => {
        form.resetFields(); // Reset form to initial values
        setSelectedImage(null); // Reset selected image
        setValueRadio(1); // Reset radio button to default (Cash)
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="tc-add-std-detail"
                initialValues={{
                    payment: valueRadio, // Set default value for radio group
                }}
            >
                <div className="tc-add-std-head">
                    <p>Student Details</p>
                </div>
                <table className="tc-table-input">
                    <tr>
                        <td rowSpan={2} style={{ verticalAlign: 'top', width: 180, paddingRight: 40 }}>
                            <p>Photo</p>
                            <div className="tc-add-photo" onClick={handleFileSelectClick}>
                                {selectedImage ? (
                                    <p>{selectedImage.name}</p>
                                ) : (
                                    <p>Drag and drop or click here to select file</p>
                                )}
                            </div>
                            <input
                                type="file"
                                id="file-input"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </td>
                        <td style={{ width: 450, paddingRight: 40 }}>
                            <Form.Item
                                name="studentName"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Student Name</p>}
                                rules={[{ required: true, message: 'Please input student name!' }]}
                            >
                                <Input placeholder="Samantha William" />
                            </Form.Item>
                        </td>
                        <td style={{ width: 400 }}>
                            <Form.Item
                                name="grade"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Grade</p>}
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
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Place of Birth</p>}
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
                                name="studentPhone"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Student Phone</p>}
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
                </table>

                <div className="tc-add-std-head">
                    <p>Parent Details</p>
                </div>
                <table className="tc-table-input">
                    <tr>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <Form.Item
                                name="parentName"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Parent Name</p>}
                                rules={[{ required: true, message: 'Please input parent name!' }]}
                            >
                                <Input placeholder="Lili William" />
                            </Form.Item>
                        </td>
                        <td style={{ width: 400 }}>
                            <Form.Item
                                name="parentPhone"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Parent Phone</p>}
                                rules={[{ required: true, message: 'Please input parent phone!' }]}
                            >
                                <Input placeholder="+1234567890" />
                            </Form.Item>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingRight: 40 }}>
                            <Form.Item
                                name="parentEmail"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Parent Email</p>}
                                rules={[{ required: true, message: 'Please input parent email!' }]}
                            >
                                <Input placeholder="william@gmail.com" />
                            </Form.Item>
                        </td>
                        <td className="tc-payment">
                            <Form.Item
                                name="payment"
                                label={<p style={{ color: '#303972', fontSize: 18 }}>Payment</p>}
                                rules={[{ required: true, message: 'Please select payment method!' }]}
                            >
                                <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                                    <Radio value={1}>Cash</Radio>
                                    <Radio value={2}>Debit</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </td>
                    </tr>
                </table>
                <div className='tc-2-btn'>
                    <Button type="default" onClick={handleCancel} className="tc-table-cc">
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" className="tc-table-sm">
                        Submit
                    </Button>
                </div>
            </Form>

            {/* Modal for confirmation */}
            <Modal
                title={<span style={{color:'#3d32b8'}}>Form Submitted</span>}
                open={openModal}
                onOk={handleOk}
                okButtonProps={{ style: { backgroundColor: '#4D44B5' } }}
                okText="OK"
                cancelButtonProps={{ style: { color: '#4D44B5' } }}
            >
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', color:'#4D44B5',fontSize: 28, marginBottom: 20}}><FaCheckCircle  /></div>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', color:'#4D44B5',fontSize: 18}}><p>You have successfully submitted the form.</p></div>
            </Modal>
        </>
    );
};

export default AddNewStudent;
