import { Modal, ScrollArea } from '@mantine/core'
import React from 'react'
import { Document, Page } from 'react-pdf'

const ResumeViewer = (props: { opened: boolean, close: () => void }) => {
  return (
    <Modal.Root 
      scrollAreaComponent={ScrollArea.Autosize} 
      size="auto" 
      centered 
      className="font-mono" 
      opened={props.opened} 
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        
        <Modal.Header 
          className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl"
        >
          <Modal.Title 
            data-autofocus 
            className="!text-4xl !text-white flex gap-3 items-center !font-bold"
          >
            Resume
          </Modal.Title>
          <Modal.CloseButton 
            size="md" 
            iconSize={30} 
            className="!bg-bgColor !text-red-500" 
          />
        </Modal.Header>

        <Modal.Body 
          className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl"
        >
          <Document file={`${process.env.PUBLIC_URL}/asset/CV-NguyenAnhQuoc-Intern.pdf`}>
  <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
</Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ResumeViewer