import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd"
import PropTypes from "prop-types"
import { useState } from "react";
import { add_listing } from "../constant/string";


const UploadPictures = ({ handleNext, handlePrev }) => {

    const [fileList, setFileList] = useState([]);

    const handleDelete = (index) => {
        const updatedFileList = [...fileList];
        updatedFileList.splice(index, 1);
        setFileList(updatedFileList);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const remainingSlots = 12 - fileList.length;
            const newFiles = Array.from(files).slice(0, remainingSlots);
            setFileList((prev) => [...prev, ...newFiles]);
        }
    };

    return (
        <>
            <div className="images-form">
                <h1 className='title'>{add_listing.steps.step5.title}</h1 >
                <Row>
                    <Col span={18}>
                        <Row gutter={20}>
                            <Col span={20}>
                                {fileList?.length < 12 && <div className="custom-upload-box">
                                    <label htmlFor="imageInput" className="custom-upload-label">
                                        <PlusOutlined />
                                        <div>Upload</div>
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="imageInput"
                                        onChange={handleFileChange}
                                        className="input-img"
                                        multiple
                                    />
                                </div>}
                                <br />

                                <Image.PreviewGroup
                                    preview={{
                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                    }}
                                >
                                    <Row className="img-group" gutter={[0, 10]}>
                                        {fileList?.map((img, index) => {
                                            return <>
                                                <Col span={4} key={index}>
                                                    <div className="image-container">
                                                        <Image className="preview-img" src={URL.createObjectURL(img)} />
                                                        <Button
                                                            type="link"
                                                            icon={<CloseOutlined />}
                                                            onClick={() => handleDelete(index)}
                                                            className="delete-button"
                                                        ></Button>
                                                    </div>
                                                </Col>

                                            </>
                                        })}
                                    </Row>
                                </Image.PreviewGroup>

                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>

                    </Col>
                </Row >

                <div className='page-ctrl'>
                    <Button type="primary" className="btn" onClick={() => handlePrev()}>{add_listing.prev_btn}</Button>
                    <Button type="primary" className="btn" onClick={() => handleNext()}>{add_listing.next_btn}</Button>
                </div>
            </div >

        </>
    )
}


UploadPictures.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default UploadPictures