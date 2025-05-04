import styled from 'styled-components';

export const TimelineContainer = styled.div`
//   position: relative;
//   margin-left: 20px;
//   border-left: 2px solidrgb(240, 106, 43);
//   padding-left: 20px;
//   margin-bottom: 40px;
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const TimelineDot = styled.div`
//   position: absolute;
//   left: -10px;
//   top: 5px;
//   width: 16px;
//   height: 16px;
//   background-color: #d0bb57;
//   border-radius: 50%;
//   border: 2px solid #0f1624;
`;

export const TimelineContent = styled.div`
  background-color: #0f1624;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);
`;

export const TimelineCompany = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  color: #9cc9e3;
  margin-bottom: 0.5rem;
`;

export const TimelineRole = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  color: #dce3e7;
  margin-bottom: 0.8rem;
`;

// export const TimelineDescription = styled.p`
//   font-size: 1.4rem;
//   color: #e4e6e7;
//   line-height: 1.6;
//   margin-bottom: 1rem;
// `;

export const TimelineDescription = styled.div`
  font-size: 1.4rem;
  color: #e4e6e7;
  line-height: 1.6;
  margin-bottom: 1rem;

  p {
    margin-bottom: 0.8rem;
  }
`;

export const TimelineTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  span {
    background-color: #6b3030;
    color: #d4c0c0;
    font-size: 1.2rem;
    padding: 6px 12px;
    border-radius: 15px;
    transition: background 0.3s ease;

    &:hover {
      background: #801414;
    }
  }
`;
