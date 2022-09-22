import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: ${props => props.isPink ? 'pink' : 'green'};
    border: 1px black solid;
    border-radius: 6px;
    padding: 10px;
`;

export const Spacer = styled.div`
    margin-top: ${props => props.mt ? props.mt : '0px'};
    margin-bottom: ${props => props.mb ? props.mb : '0px'};
    margin-right: ${props => props.mr ? props.mr : '0px'};
    margin-left: ${props => props.ml ? props.ml : '0px'};
`;