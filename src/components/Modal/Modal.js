import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ModalContainer from './ModalContainer';

const Modal = ({ childeren, onClose, propsFunction, isCancel }) => {
  const ousideClose = e => {
    if (e.target === e.currentTarget) {
      onClose(); // 외부 클릭시 닫히게 하는 코드
    }
  };

  const closeModal = onClose;

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
    //모달이 켜졌을시 스크롤 금지
  }, []);

  /*
  childeren : 보여줄 내용물
  onClose : 부모에서 모달창을 끄고 닫을수 있는 기능
  propsFunction : API 통신을 위한 함수 
  isCancel : boolean 값 을 받아 닫기버튼을 보여줄것인지 안보여줄것인지
  */

  return (
    <ModalContainer>
      <Overlay onClick={ousideClose}>
        <ModalStyle>
          {childeren}
          <BtnBox>
            {isCancel && (
              <Button
                onClick={() => closeModal()}
                width="150px"
                size="medium"
                color="middleGrey"
                hoverColor="hoverGrey"
              >
                닫기
              </Button>
            )}
            <Button
              /*propsFunction가없으면 팝업이닫히고
              있으면 propsFunction으로 내려준 함수를 실행시키고 함수를 닫는 onClick 이벤트
              */
              onClick={() => {
                if (!propsFunction) {
                  return closeModal();
                } else propsFunction();
                closeModal();
              }}
              size="medium"
              width="150px"
            >
              확인
            </Button>
          </BtnBox>
        </ModalStyle>
      </Overlay>
    </ModalContainer>
  );
};

const Overlay = styled.div`
  position: fixed;
  ${({ theme }) => theme.variables.absoluteCenter}
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 888;
`;

const ModalStyle = styled.div`
  ${({ theme }) => theme.variables.absoluteCenter}
  ${({ theme }) => theme.variables.flex('column')}
  width: 400px;
  max-width: 100%;
  height: 200px;
  max-height: 100%;
  background-color: white;
  border-radius: 20px;
  z-index: 999;
`;

const BtnBox = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-around')}
  width: 400px;
  margin-top: 50px;
`;

export default Modal;
