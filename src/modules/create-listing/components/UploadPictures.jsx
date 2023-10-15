import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd"
import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import { add_listing } from "../constant/string";
import { useDispatch } from "react-redux";
import { createListing } from "../store/actions/createListing";
import { useNavigate } from "react-router-dom";
import { store } from "../../../store/store";
import dayjs from 'dayjs';



const UploadPictures = ({ handlePrev }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [fileList, setFileList] = useState([]);
    const [error, setError] = useState(null);

    //==> Success and error callbacks <==
    const successCallback = () => {
        navigate('/listing-success')
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            if ((fileList.length + files.length) >= 6) {
                setError(null)
            }

            const remainingSlots = 12 - fileList.length;
            const newFiles = Array.from(files).slice(0, remainingSlots);
            setFileList((prev) => [...prev, ...newFiles]);
        }
    };

    const handleDelete = (index) => {
        const updatedFileList = [...fileList];
        updatedFileList.splice(index, 1);
        setFileList(updatedFileList);
    };

    const handleSubmitListing = () => {
        if (fileList.length < 6) {
            setError('Please upload at least 6 images')
            return
        }

        let { listingData } = store.getState().createListing
        let { S0, S1, S2, S3 } = listingData
        let startTime = dayjs(S3.time[0]).toISOString(), endTime = dayjs(S3.time[1]).toISOString()

        let payload = {
            ...S0,
            ...S1,
            ...S2,
            ...S3,
            startTime,
            endTime,
            propertyImg: fileList
        }
        delete payload.time
        dispatch(createListing(payload, successCallback))
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <div className="images-form">
                <h1 className='title'>{add_listing.steps.step5.title}</h1 >
                <Row>
                    <Col span={18}>
                        <Row gutter={20}>
                            <Col span={20}>
                                {fileList?.length < 12 && <>
                                    <div className="custom-upload-box">
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
                                    </div>
                                    {error && <><span className="error">{error}</span> <br /></>}
                                </>
                                }
                                <br />

                                <Image.PreviewGroup>
                                    <Row className="img-group" gutter={[0, 10]}>
                                        {fileList?.map((img, index) => {
                                            return (
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
                                            )
                                        })}
                                    </Row>
                                </Image.PreviewGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}></Col>
                </Row>

                <div className='page-ctrl'>
                    <Button type="primary" className="btn" onClick={() => handlePrev()}>{add_listing.prev_btn}</Button>
                    <Button type="primary" className="btn" onClick={() => handleSubmitListing()}>{add_listing.submit_btn}</Button>
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