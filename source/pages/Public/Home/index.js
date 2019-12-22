// Core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

//Components
import { MedicineList, Container, Typography, FixedButton } from 'components';

//Actions
import { showModal } from 'store/reducers/modals/actions';

const Home = () => {
    const dispatch = useDispatch();

    const _handleAddClick = () => {

        dispatch(showModal({ type: 'MODAL_ADD' }));
    };

    return (
        <Container>
            <Typography as = 'h1' size = 'h1'>Medicines</Typography>
            <MedicineList />
            <FixedButton>
                <Button
                    type="primary" 
                    shape="round"
                    icon = 'plus'
                    onClick = { _handleAddClick }>
                    Add new item
                </Button>
            </FixedButton>
        </Container>
    );
};

export default Home;
