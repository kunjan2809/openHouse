import { PlusOutlined, MinusOutlined  } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd"
import PropTypes from "prop-types"
import { useState } from "react";



const UploadPictures = ({ handleNext, handlePrev }) => {

    const [fileList, setFileList] = useState([]);

    const handleDelete = (index) => {
        const updatedFileList = [...fileList];
        updatedFileList.splice(index, 1);
        setFileList(updatedFileList);
    };

    const getBase64 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setFileList((prev) => [...prev, reader.result])
        }
    }

    console.log('fileList :>> ', fileList);


    return (
        <>
            <div className="images-form">

                <h1 className='title'>UPLOAD UPTO 12 PHOTOS</h1 >


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
                                        onChange={getBase64}
                                        className="input-img"
                                    // disabled={fileList?.length < 12 ? false : true}
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
                                                        <Image className="preview-img" src={img} />
                                                        <Button
                                                            type="link"
                                                            icon={<MinusOutlined />}
                                                            onClick={() => handleDelete(index)}
                                                            className="delete-button"
                                                        />
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
                    <Button type="primary" className="btn" onClick={() => handlePrev()}>Prev</Button>
                    <Button type="primary" className="btn" onClick={() => handleNext()}>Save & Next</Button>
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