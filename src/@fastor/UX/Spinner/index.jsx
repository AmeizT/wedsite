import styled from 'styled-components'

export const SpinnerLoader = styled.div`
    & .spinner {
        border: 3px solid #f3f3f3;
        border-radius: 50%;
        border-top: 3px solid var(--sagebrush);
        width: 20px;
        height: 20px;
        -webkit-animation: spin 800ms linear infinite;
        animation: spin 800ms linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export function Spinner(){
    return (
        <SpinnerLoader>
            <div className="spinner"></div>
        </SpinnerLoader>
    )
}