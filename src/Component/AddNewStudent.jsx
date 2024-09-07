import React, { useState } from 'react'
import './AddNewStudent.css'
import { Radio } from 'antd'

const AddNewStudent = () => {
    const [valueRadio, setValueRadio] = useState(1);
    const onChangeRadio = (e) => {
        setValueRadio(e.target.value);
    };
    return (
        <>
            <div className='tc-add-std-detail'>
                <div className='tc-add-std-head'>
                    <p>Student Details</p>
                </div>
                <table className='tc-table-input'>
                    <tr>
                        <td rowSpan={2} style={{ verticalAlign: 'top', width: 180 }}>
                            <p>Photo*</p>
                            <div className='tc-add-photo'> Drag and drop or click here to select file</div>
                        </td>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <p>Student Name*</p>
                            <input type='text' placeholder='Samantha William'></input>
                        </td>
                        <td style={{ width: 400 }}>
                            <p>Grade*</p>
                            <input type='text' placeholder='VII A'></input>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <p>Date & Place of Birth*</p>
                            <div className='tc-input-birth'><input type='text' placeholder='Samantha' /><input type='text' placeholder='Vietnam' /></div>
                        </td>
                        <td>
                            <p>Parent Name*</p>
                            <input type='text' placeholder='Lili William'></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <p>Email*</p>
                            <input type='text' placeholder='william@gamail.com'></input>
                        </td>
                        <td>
                            <p>Phone*</p>
                            <input type='text' placeholder='+1234567890'></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ paddingRight: 40 }}>
                            <p>Address*</p>
                            <textarea placeholder='Enter your address here'/>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className='tc-add-std-detail'>
                <div className='tc-add-std-head'>
                    <p>Parent Details</p>
                </div>
                <table className='tc-table-input'>
                    <tr>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <p>First Name*</p>
                            <input type='text' placeholder='Samantha'></input>
                        </td>
                        <td style={{ width: 400 }}>
                            <p>Last Name*</p>
                            <input type='text' placeholder='William'></input>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: 400, paddingRight: 40 }}>
                            <p>Email*</p>
                            <input type='text' placeholder='william@gamail.com'></input>
                        </td>
                        <td>
                            <p>Phone*</p>
                            <input type='text' placeholder='+1234567890'></input>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingRight: 40 }}>
                            <p>Address*</p>
                            <textarea placeholder='Enter your address here'/>
                        </td>
                        <td className='tc-payment'>
                            <p>Payment*</p>
                            <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                                <Radio value={1}>Cash</Radio>
                                <Radio value={2}>Debit</Radio>
                            </Radio.Group>
                        </td>
                    </tr>
                </table>
                <div className='tc-table-sm'>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddNewStudent
