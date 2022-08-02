import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  margin-top: 4rem;
  overflow-y: scroll;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 0;
  color: var(--text-body);
`
