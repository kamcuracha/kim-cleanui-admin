import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import FavPages from './FavPages'
import Search from './Search'
import IssuesHistory from './IssuesHistory'
import ProjectManagement from './ProjectManagement'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import style from './style.module.scss'

const TopBar = () => {
  const stepOnboarding = localStorage.getItem('stepOnboarding')
  const [modal, setModal] = useState(false)
  const [step, setStep] = useState(
    !stepOnboarding || stepOnboarding === 'done' ? '1' : stepOnboarding,
  )

  const handleToggle = () => setModal(!modal)

  const saveStep = value => {
    localStorage.setItem('stepOnboarding', value)
    setStep(value)
  }

  const handleDecrement = () => {
    const newStep = (+step - 1).toString()
    saveStep(newStep)
  }

  const handleIncrement = () => {
    const newStep = (+step + 1).toString()
    saveStep(newStep)
  }

  const handleDone = () => {
    localStorage.setItem('stepOnboarding', 'done')
    setModal(false)
  }

  return (
    <div className={style.topbar}>
      <div className="mr-4">
        <FavPages />
      </div>
      <div className="mr-auto">
        <Search />
      </div>
      <div className="mr-4 d-none d-md-block">
        <Button color="primary" onClick={handleToggle} className="mr-3">
          OnBoarding
        </Button>
        <Modal centered isOpen={modal} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>OnBoarding</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <span className="px-3">
              Step <span className="h6 font-italic">{step}/4</span>
            </span>{' '}
            <Button color="primary" disabled={step === '1'} onClick={handleDecrement}>
              Previous
            </Button>{' '}
            {step !== '4' ? (
              <Button color="primary" onClick={handleIncrement}>
                Next
              </Button>
            ) : (
              <Button color="primary" onClick={handleDone}>
                Done
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </div>
      <div className="mr-4 d-none d-md-block">
        <IssuesHistory />
      </div>
      <div className="mb-0 mr-auto d-xl-block d-none">
        <ProjectManagement />
      </div>
      <div className="mr-4 d-none d-sm-block">
        <LanguageSwitcher />
      </div>
      <div className="mr-4 d-none d-sm-block">
        <Actions />
      </div>
      <div className="">
        <UserMenu />
      </div>
    </div>
  )
}

export default TopBar
