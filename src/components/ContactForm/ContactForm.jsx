import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
import styles from './ContactForm.module.css'
import emailIcon from '../../assets/email-black.svg'
import phoneIcon from '../../assets/phone-black.svg'
import SuccessModal from '../SuccessModal/SuccessModal'
import { countryCodes } from '../../data/countryCodes'
import { Link } from 'react-router-dom'

const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    countryCode: '+91',
    phone: '',
    country: 'India',
    message: '',
    consent: false,
}


const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    company: Yup.string().required('Required'),
    jobTitle: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Phone must contain numbers only')
        .min(7, 'Phone number is invalid')
        .max(15, 'Phone number is invalid')
        .required('Required'),
    country: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
})

const codeOptions = countryCodes.map(({ code }) => ({ value: code, label: code }))

const countryOptions = countryCodes.map(({ label }) => ({ value: label, label: label }))

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <section className={styles.contactSection} id="contact">
            <div className={`container ${styles.contactLayout}`}>
                {/* Left: form card */}
                <div className={styles.formCard}>
                    <header className={styles.formHeader}>
                        <h2 className={styles.formTitle}>Contact our team</h2>
                        <p className={styles.formLead}>
                            Let’s help you get started. Submit the form below and a member of our team
                            will reach out to you soon.
                        </p>
                    </header>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions) => {
                            const formData = {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                company: values.company,
                                jobTitle: values.jobTitle,
                                email: values.email,
                                countryCode: values.countryCode,
                                phone: values.phone,
                                country: values.country,
                                message: values.message,
                            }
                            try {
                                const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
                                    method: 'POST',
                                    mode: 'no-cors',
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded',
                                    },
                                    body: new URLSearchParams(formData).toString()
                                });

                                actions.setSubmitting(false);
                                actions.resetForm();
                                setIsSubmitted(true);
                            } catch (error) {
                                console.error('Submission error:', error);
                                actions.setSubmitting(false);
                            }
                        }}
                    >
                        {({ values, isSubmitting, setFieldValue }) => (
                            <Form className={styles.form}>
                                {/* First + Last name */}
                                <div className={styles.row}>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            First Name <span>*</span>
                                        </label>
                                        <Field
                                            name="firstName"
                                            className={styles.input}
                                            placeholder="First Name"
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Last Name <span>*</span>
                                        </label>
                                        <Field
                                            name="lastName"
                                            className={styles.input}
                                            placeholder="Last Name"
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                </div>

                                {/* Company + Job title */}
                                <div className={styles.row}>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Company <span>*</span>
                                        </label>
                                        <Field
                                            name="company"
                                            className={styles.input}
                                            placeholder="Company"
                                        />
                                        <ErrorMessage
                                            name="company"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Job Title <span>*</span>
                                        </label>
                                        <Field
                                            name="jobTitle"
                                            className={styles.input}
                                            placeholder="Job Title"
                                        />
                                        <ErrorMessage
                                            name="jobTitle"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                </div>

                                {/* Email + Phone */}
                                <div className={styles.row}>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Email Address <span>*</span>
                                        </label>
                                        <Field
                                            name="email"
                                            className={styles.input}
                                            placeholder="name@company.com"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Direct Phone <span>*</span>
                                        </label>
                                        <div className={styles.phoneRow}>
                                            <Select
                                                options={codeOptions}
                                                name="countryCode"
                                                value={codeOptions.find(opt => opt.value === values.countryCode)}
                                                onChange={opt => setFieldValue('countryCode', opt.value)}
                                                classNamePrefix="react-select"
                                                className={styles.select}
                                            />
                                            <Field
                                                name="phone"
                                                className={styles.input}
                                                placeholder="Phone number"
                                                type="tel"
                                                inputMode="numeric"
                                                maxLength="15"
                                                onKeyDown={e => {
                                                    if (
                                                        !/[0-9]/.test(e.key) &&
                                                        !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(
                                                            e.key,
                                                        )
                                                    ) {
                                                        e.preventDefault()
                                                    }
                                                }}
                                                onChange={e => {
                                                    const numeric = e.target.value.replace(/[^0-9]/g, '')
                                                    setFieldValue('phone', numeric)
                                                }}
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div className={styles.rowSingle}>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>
                                            Country <span>*</span>
                                        </label>
                                        <Field as="select" name="country" className={styles.input}>
                                            <option value="" disabled hidden>
                                                Select country
                                            </option>
                                            {countryOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name="country"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className={styles.rowSingle}>
                                    <div className={styles.fieldBox}>
                                        <label className={styles.label}>Comments/Questions</label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows={4}
                                            className={styles.textarea}
                                            placeholder="Please share any details that will help us prepare for the conversation."
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                </div>

                                {/* Note + Submit */}
                                <div className={styles.footerRow}>
                                    <label className={styles.consentBox}>
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            className={styles.checkbox}
                                            checked={values.consent}
                                            onChange={e => setFieldValue('consent', e.target.checked)}
                                        />
                                        <span className={styles.legal}>
                                            By submitting, you agree to the processing of your data by ACPL Systems
                                            Pvt. Ltd. as described in the <Link to="/privacy-policy">Privacy Policy</Link>.
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn btn--primary ${styles.submitBtn}`}
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <SuccessModal open={isSubmitted} onClose={() => setIsSubmitted(false)} />
                </div>
                <div className={styles.officesColumn}>
                    {/* Example card */}
                    <div className={styles.officeCard}>
                        <h3 className={styles.officeTitle}>Gurgaon (HO)</h3>
                        <p className={styles.officeText}>
                            ACPL Systems Pvt Ltd.
                            <br />
                            235-240, 2nd Floor,
                            <br />
                            Vipul Trade Center, Sector-48,
                            <br />
                            Gurgaon - 122018, Haryana, India
                        </p>
                        <div className={styles.officeContact}>
                            <span><img src={phoneIcon} />
                                <a href="tel:+918377008167" className={styles.phone}>+91-8377008167</a></span>
                            <span><img src={emailIcon} />
                                <a href="mailto:microsoftsecurity-experts@acpl.com" className={styles.email}>microsoftsecurity-experts@acpl.com</a></span>
                        </div>
                    </div>
                    <div className={styles.officeCard}>
                        <h3 className={styles.officeTitle}>Bengaluru</h3>
                        <p className={styles.officeText}>
                            ACPL Systems Pvt Ltd.
                            <br />
                            1165, 5th Main Road, Sector 7, HSR Layout,
                            <br />
                            Bangaluru - 560102, Karnataka, India
                        </p>
                        <div className={styles.officeContact}>
                            <span><img src={phoneIcon} />
                                <a href="tel:+918377008167" className={styles.phone}>+91-8377008167</a></span>
                            <span><img src={emailIcon} />
                                <a href="mailto:microsoftsecurity-experts@acpl.com" className={styles.email}>microsoftsecurity-experts@acpl.com</a></span>
                        </div>
                    </div>
                    <div className={styles.officeCard}>
                        <h3 className={styles.officeTitle}>Mumbai</h3>
                        <p className={styles.officeText}>
                            ACPL Systems Pvt Ltd.
                            <br />
                            804, 8th floor, Rajhans Helix 3,
                            <br />
                            LBS Marg, Ghatkopar West,
                            <br />
                            Mumbai - 400086, Maharashtra, India
                        </p>
                        <div className={styles.officeContact}>
                            <span><img src={phoneIcon} />
                                <a href="tel:+918377008167" className={styles.phone}>+91-8377008167</a></span>
                            <span><img src={emailIcon} />
                                <a href="mailto:microsoftsecurity-experts@acpl.com" className={styles.email}>microsoftsecurity-experts@acpl.com</a></span>
                        </div>
                    </div>
                    <div className={styles.officeCard}>
                        <h3 className={styles.officeTitle}>Australia</h3>
                        <p className={styles.officeText}>
                            ACPL Systems Pvt Ltd.
                            <br />
                            697 Collins Street,
                            <br />
                            Melbourne Quarter Two,
                            <br />
                            Melbourne, Australia - 209
                        </p>
                        <div className={styles.officeContact}>
                            <span><img src={phoneIcon} />
                                <a href="tel:+61410485811" className={styles.phone}>+61 410 485 811</a></span>
                            <span><img src={emailIcon} />
                                <a href="mailto:microsoftsecurity-experts@acpl.com" className={styles.email}>microsoftsecurity-experts@acpl.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm

