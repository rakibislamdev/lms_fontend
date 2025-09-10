import { Modal } from 'antd';
import React, { memo } from 'react';

const CrudModal = memo(({ visible, onCancel, onOk, title, form }) => {
    return (
        <Modal
            open={visible}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onOk}
        >
            {form}
        </Modal>
    );
});

export default CrudModal;