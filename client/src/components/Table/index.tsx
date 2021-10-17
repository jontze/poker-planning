import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { ReactElement } from 'react';

import { useResetGameMutation, useShowCardsMutation } from 'api';

interface TableProps {
  isShownCards: boolean;
  roomId: string;
}

export function Table({ isShownCards, roomId }: TableProps): ReactElement {
  const [showCardsMutation, { loading: showCardLoading }] =
    useShowCardsMutation();

  const [resetGameMutation, { loading: resetGameLoading }] =
    useResetGameMutation();

  function handleShowCards() {
    showCardsMutation({
      variables: {
        roomId,
      },
    });
  }

  function handleResetGame() {
    resetGameMutation({
      variables: {
        roomId,
      },
    });
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '150px',
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: 8,
        color: 'common.white',
      }}
    >
      {isShownCards ? (
        <LoadingButton
          onClick={handleResetGame}
          loading={resetGameLoading}
          loadingPosition="end"
          variant="outlined"
          size="large"
        >
          Reset game
        </LoadingButton>
      ) : (
        <LoadingButton
          onClick={handleShowCards}
          loading={showCardLoading}
          loadingPosition="end"
          variant="outlined"
          size="large"
        >
          Show cards
        </LoadingButton>
      )}
    </Box>
  );
}
