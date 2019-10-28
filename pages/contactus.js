import React from 'react'
import PageWrapper from '../components/PageWrapper'
import WrappedContactForm from '../components/Form'

const ContactUs = () => {
    return (
        <div>
            <PageWrapper>
                <div className="contact-us">
                    <div className="form-left"><img src="../images/contact-us.svg" /></div>
                    <div className="form-right">
                        <WrappedContactForm />
                    </div>
                </div>
            </PageWrapper>
            <style jsx>
                {
                    `.contact-us{
                        display: flex;
                        width: 100%;

                    }
                    .form-left{
                        width: 60%;
                        margin: 0 auto;
                    }
                    .form-right{
                        width: 40%;
                    }
                    `
                }
            </style>
        </div>
    )
}

export default ContactUs;
