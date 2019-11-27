import styled from "styled-components";

export const ItemWrap = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }
  // 엘리먼트 사이사이에 테두리를 넣어줌
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
export const Checkbox = styled.div`
  cursor: pointer;
  flex: 1; // 차지할 수 있는 영역 모두 차지
  display: flex;
  align-items: center; // 세로 중앙 정렬
  svg {
    // 아이콘
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1; // 차지할 수 있는 영역 모두 차지
  }
  // 체크되었을 때 보여줄 스타일
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;
