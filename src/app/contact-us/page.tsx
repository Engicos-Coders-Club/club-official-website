'use client';
import { useState } from 'react';
import { PageHeader } from '@/components'
// import styles from './style.module.css';
import styles from '../page.module.css'
import Image from 'next/image';
import emailIcon from '../../../public/mail.png';
import check from '../../../public/check.png';

function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText('codersclub.gec@gmail.com');
        setCopied(true);
    };

    return (
        <div className="page">
            <PageHeader title={"Contact Us"} desc="" />
            <section className="textSection">
                <p className="text">Lorem ipsum dolor sit amet consectetur. Augue ut mattis quis pretium mattis dignissim erat arcu. Elit pharetra quis semper diam amet auctor morbi. Mauris ipsum in adipiscing sem felis urna laoreet. Tristique porttitor rhoncus auctor odio risus. Cursus sem sollicitudin amet tellus.</p>
            </section>
            <section className="buttonSection">
                <h2 className="title">Tell Us About Your Skills</h2>
                <p className="description">This is a form to collect details about students and what skills they have so it becomes easy for us to contact you if there is a need for the corresponding skill.</p>
                <a href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfY24F2SeC1G7SQkKIq9GvUC5-DmIBPZfXPEH7gc096jou8ew/alreadyresponded?usp=send_form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="formButton">
                    Fill the form <span className="arrow">&rarr;</span>
                </a>
            </section>
            <div class="events-page-section-divider"></div>
            <section className="twoColumnSection">
                <div className="addressColumn">
                    <h2 className="addressTitle">Address</h2>
                    <p className="actualAddress">Goa College of Engineering,
                        "Bhausaheb Bandodkar Technical Education Complex”,
                        Farmagudi,
                        Ponda - Goa, India
                        Pin - 403401</p>
                </div>
                <div class="events-page-column-divider"></div>
                <div className="touchColumn">
                    <h2 className="touchTitle">GET IN TOUCH</h2>
                    <button className="copyButton" onClick={handleCopyClick}>
                        <Image src={copied ? check : emailIcon} alt="Email" className="emailIcon" width={100} height={100} />
                        codersclub.gec@gmail.com
                    </button>
                </div>
            </section>
        </div>
    );
};


export default ContactPage