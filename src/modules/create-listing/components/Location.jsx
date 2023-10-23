import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"
import { add_listing } from "../constant/string";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { storeStepData } from "../store/actions/createListing";
import { useCallback, useEffect, useState } from "react";
import { COUNTRIES, STATES } from "../constant/options";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const Location = ({ handleNext, handlePrev }) => {

    const dispatch = useDispatch()
    const { listingData } = useSelector((state) => state.createListing)

    const [map, setMap] = useState(null)
    const [center, setCenter] = useState({
        lat: 56.1304,
        lng: 106.3468
    })
    const [selectedLocation, setSelectedLocation] = useState(null);


    //==> Map properties <==
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_MAP_KEY
    })

    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        map.setZoom(10)
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback() {
        setMap(null)
    }, [])

    const handleChangeCenter = () => {
        setFieldTouched('latLng', true)
        setCenter({
            lat: map.center.lat(),
            lng: map.center.lng()
        })
    }

    const handleMapClick = (eventData) => {
        const location = {
            lat: eventData.latLng.lat(),
            lng: eventData.latLng.lng(),
        }
        setFieldValue('latLng', location)
        setSelectedLocation(location)
    }



    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        country: Yup.string().trim().required('Please select country'),
        state: Yup.string().trim().required('Please select state'),
        address: Yup.string().trim().required('Please enter address'),
        city: Yup.string().trim().required('Please enter city name'),
        zip: Yup.string().trim().required('Please enter zip code'),
        latLng: Yup.object().required('Please select location')
    })

    const initialValues = {
        country: 'Canada',
        state: null,
        address: '',
        city: '',
        zip: '',
        latLng: null
    }

    const initialTouched = {
        country: false,
        state: false,
        address: false,
        city: false,
        zip: false,
        latLng: false,
    }

    const formik = useFormik({
        initialValues: initialValues,
        initialTouched: initialTouched,
        validationSchema: formSchema,
        onSubmit: async (values) => {
            let data = {
                country: values.country,
                state: values.state,
                address: values.address,
                city: values.city,
                zip: values.zip,
                latLng: values.latLng
            }
            console.log('data', data)
            dispatch(storeStepData('S1', data))
            handleNext()
        }
    })
    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, setValues, setFieldTouched } = formik


    //Set field values on load
    useEffect(() => {
        if (listingData?.S1) {
            setValues(listingData?.S1)
            setTimeout(() => {
                setSelectedLocation(listingData?.S1?.latLng)
                setCenter(listingData?.S1?.latLng)
            }, 0);
        }
    }, [listingData])

    //Set default position
    // useEffect(() => {
    //     if (!listingData?.S1) {
    //         navigator.geolocation.getCurrentPosition(
    //             (location) => setCenter({
    //                 lat: location.coords.latitude,
    //                 lng: location.coords.longitude
    //             })
    //         )
    //     }
    // }, [])

    // Get lat lng using address string
    useEffect(() => {
        if (window?.google?.maps?.Geocoder) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder?.geocode({ address: `${values.address}, ${values.city}, ${values.state}, ${values.country}` }, (results, status) => {
                if (status === "OK" && results[0]) {
                    const location = results[0].geometry.location;
                    setCenter({
                        lat: location.lat(),
                        lng: location.lng(),
                    });
                } else {
                    console.error("Geocode was not successful for the following reason: " + status);
                }
            });
        }
    }, [values.country, values.state, values.city, values.address])


    return (
        <div className="location-form">
            <h1 className='title'>{add_listing.steps.step3.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.country}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select country'
                                options={COUNTRIES}
                                onChange={(value) => setFieldValue('country', value)}
                                onBlur={handleBlur}
                                value={values.country}
                            />
                            {touched.country && errors.country && <span className='error'>{errors.country}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.state}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select state'
                                options={STATES}
                                onChange={(value) => setFieldValue('state', value)}
                                onBlur={handleBlur}
                                value={values.state}
                            />
                            {touched.state && errors.state && <span className='error'>{errors.state}</span>}
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step2.fields.address}</label>
                            <Input
                                name="address"
                                placeholder="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {touched.address && errors.address && <span className='error'>{errors.address}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.city}</label>
                            <Input
                                name="city"
                                placeholder="City name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            {touched.city && errors.city && <span className='error'>{errors.city}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.zip}</label>
                            <Input
                                name="zip"
                                placeholder="zip code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                            />
                            {touched.zip && errors.zip && <span className='error'>{errors.zip}</span>}
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                </Col>
                <Col span={24}>
                    <div className="google-map-view">
                        {isLoaded && <GoogleMap
                            options={{ gestureHandling: 'greedy' }}
                            mapContainerStyle={{
                                width: '100%',
                                height: '450px'
                            }}
                            center={center}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            onClick={handleMapClick}
                            onDragEnd={handleChangeCenter}
                        >
                            {
                                selectedLocation && <MarkerF
                                    position={selectedLocation}
                                >
                                </MarkerF>
                            }
                        </GoogleMap>}
                    </div>
                    <span className="map-guide">Click on the map to set location marker*</span> <br />
                    {touched.latLng && errors.latLng && <span className="error">{errors.latLng}</span>}
                </Col>
            </Row>

            <div className='page-ctrl'>
                <Button type="primary" className="btn" onClick={() => handlePrev()}>{add_listing.prev_btn}</Button>
                <Button type="primary" className="btn" onClick={() => submitForm()}>{add_listing.next_btn}</Button>
            </div>
        </div >
    )
}


Location.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default Location