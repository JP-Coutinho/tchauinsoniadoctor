import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: #fff;
  padding: 40px 48px 32px 48px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #0a1446;
  text-align: center;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #222;
  margin-bottom: 6px;
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background: #fafafa;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const Button = styled.button`
  flex: 1;
  padding: 8px 0;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 0.95rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #222;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 18px 0;
`;

export const DividerText = styled.span`
  color: #888;
  font-size: 1rem;
  margin: 0 12px;
  white-space: nowrap;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e0e0e0;
    position: relative;
    top: 0.5em;
    margin: 0 8px;
    z-index: 0;
  }
`;

export const GoogleButton = styled.button`
  flex: 1;
  padding: 8px 0;
  background: #fff;
  color: #222;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;

  &:hover {
    background: #f5f5f5;
    border: 1px solid #bdbdbd;
  }
`;

export const GoogleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  margin-top: 18px;
  font-size: 14px;
  text-align: center;
`;