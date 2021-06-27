import React, { useState } from 'react'
import Styled from 'styled-components'
import { Modal } from 'antd'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const RowWrapper = Styled.div`
    min-height: 300px;
    width: 100%;
    border: 5px double white;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`
const Announcement = Styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
`

const Move = Styled.div`
    padding: 10px;
    border: 2px double white;
    flex-grow: 1;
    width: Calc(33% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        font-size: 12px;
    }
`

export default function Row3(props) {
    const [move, changeMove] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)

    function showModal() {
        setIsModalVisible(true)
    }
    function handleOk() {
        setIsModalVisible(false)
        fetch(
            'https://justen-main.s3.us-west-1.amazonaws.com/Resume+June+2021.pdf',
            {
                method: 'GET',
            }
        )
            .then((response) => response.blob())
            .then((blob) => {
                console.log(blob)
                var url = window.URL.createObjectURL(blob)
                var a = document.createElement('a')
                a.href = url
                a.download = 'justen_phelps_resume.pdf'
                document.body.appendChild(a)
                a.click()
                a.remove()
            })
    }

    function handleCancel() {
        setIsModalVisible(false)
    }

    function handleClick(e) {
        let option = e.target.dataset.option
        if (option === 'resume') {
            changeMove('resume')
            props.manageHealth(30)
            showModal()
            setTimeout(() => {
                changeMove(null)
            }, 4000)
        }
        if (option === 'email') {
            changeMove('email')
            props.manageHealth(10)
            var a = document.createElement('a')
            a.href = 'mailto:phelps.justen@gmail.com'
            document.body.appendChild(a)
            a.click()
            a.remove()
            setTimeout(() => {
                changeMove(null)
            }, 4000)
        }
        if (option === 'run') {
            changeMove('run')
            props.manageHealth(0)
            setTimeout(() => {
                changeMove(null)
            }, 4000)
        }
        if (option === 'experience') {
            changeMove('experience')
            props.manageHealth(10)
            setTimeout(() => {
                changeMove(null)
            }, 6000)
        }
    }

    return (
        <RowWrapper>
            <Modal
                title="Justen's Resume"
                visible={isModalVisible}
                onOk={handleOk}
                okText="Download"
                onCancel={handleCancel}
                width={window.innerWidth > 600 ? '600px' : window.innerWidth}
            >
                <Document file="/docs/resume.pdf">
                    <Page
                        pageNumber={1}
                        width={
                            window.innerWidth > 600
                                ? 550
                                : window.innerWidth - 60
                        }
                    />
                </Document>
            </Modal>
            {move === 'resume' ? (
                <Announcement>
                    <div>
                        You downloaded{' '}
                        <span
                            style={{
                                color: '#b98eff',
                                display: 'inline-block',
                            }}
                        >
                            Justen's
                        </span>
                        &nbsp;{move}!
                        <br />
                        It is probably outdated!
                    </div>
                </Announcement>
            ) : move === 'email' ? (
                <Announcement>
                    <div>
                        You emailed
                        <span
                            style={{
                                color: '#b98eff',
                                display: 'inline-block',
                            }}
                        >
                            &nbsp;Justen
                        </span>
                        !
                        <br />
                        Hopefully he responds!
                    </div>
                </Announcement>
            ) : move === 'run' ? (
                <Announcement>
                    This is a website!
                    <br />
                    You can't run!
                </Announcement>
            ) : move === 'experience' ? (
                <Announcement
                    style={{
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src="/images/jp.png" alt="jp" width="50px" />
                    <div>
                        <span
                            style={{
                                color: '#b98eff',
                                display: 'inline-block',
                            }}
                        >
                            Justen's
                        </span>
                        &nbsp;Experience:
                        <br />
                        - JavaScript / TypeScript
                        <br />
                        - React
                        <br />
                        - Node
                        <br />
                        - GraphQL
                        <br />
                        - Postgres, BigQuery, MySQL
                        <br />- Docker, K8S, AWS
                        <small
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                fontSize: '10px',
                            }}
                        ></small>
                    </div>
                </Announcement>
            ) : null}
            <Move onClick={handleClick} data-option="resume">
                Resume
            </Move>
            <Move onClick={handleClick} data-option="experience">
                Experience
            </Move>
            <Move onClick={handleClick} data-option="email">
                Email
            </Move>
            <Move onClick={handleClick} data-option="linkedin">
                <a
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'white',
                    }}
                    href="https://www.linkedin.com/in/justen-phelps/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </Move>
            <Move onClick={handleClick} data-option="github">
                <a
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'white',
                    }}
                    href="https://github.com/justenbphelps"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </Move>
            <Move onClick={handleClick} data-option="run">
                Run
            </Move>
        </RowWrapper>
    )
}
