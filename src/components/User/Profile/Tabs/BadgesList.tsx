import { Box, Center, Container, VStack } from '@chakra-ui/react';

const BadgesList = () => {
  return (
    <Container maxW="full" p="0">
      <Box as="p" textStyle="title2">
        Badges
      </Box>

      <Center w="full" height="20rem">
        <VStack>
          <Box as="p" textStyle="title2">
            Badges Are Coming Soon
          </Box>
          <Box
            maxW="22rem"
            textAlign="center"
            as="p"
            color="#B4B0B2"
            textStyle="body4"
          >
            Badges are a way to verify you as a real human and protect the
            platform from sybil attacks
          </Box>
        </VStack>
      </Center>
      {/* <Wrap p="0" spacing="0.9rem">
        <BadgeCard
          name={'Human'}
          available={false}
          about={'Verify Civic Pass'}
          description={
            'Verify your uniqueness with civic pass using a secure 3d face scan.'
          }
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3254 0.0792144C25.6653 0.163854 26.9907 0.329789 28.0037 0.66397C30.0492 1.33871 32.4963 2.5345 34.4635 4.39228C36.4603 6.27795 38 8.89223 38 12.2758H34.2633C34.2633 10.114 33.3119 8.41544 31.8835 7.06648C30.4255 5.68961 28.5131 4.72896 26.8218 4.17106C26.2836 3.99353 25.3543 3.84863 24.0873 3.7686C22.8573 3.6909 21.4368 3.68101 19.9902 3.71666C17.0887 3.78816 14.2016 4.03951 12.7299 4.24736C11.7255 4.3892 9.38281 5.43085 7.30804 7.86198C5.29961 10.2154 3.59448 13.823 3.7461 18.9999C3.90359 24.3777 5.23341 27.9713 6.99099 30.2501C8.72866 32.5031 10.9775 33.5977 13.295 33.8524C16.0301 34.1529 18.8676 34.3031 21.3406 34.3031C23.8537 34.3031 25.8585 34.1473 26.9927 33.8884C28.3869 33.5701 30.2484 32.4449 31.7804 30.749C33.3041 29.0624 34.2633 27.0771 34.2633 25.215H38C38 28.2822 36.4681 31.1076 34.5665 33.2126C32.6733 35.3084 30.1754 36.9558 27.8329 37.4906C26.2683 37.8478 23.9136 38 21.3406 38C18.7276 38 15.7524 37.842 12.8825 37.5267C9.59497 37.1654 6.40394 35.5832 4.02036 32.4928C1.65669 29.4281 0.18389 25.0117 0.0109607 19.107C-0.167846 13.0016 1.86362 8.51106 4.45292 5.47702C6.97588 2.5207 10.092 0.885532 12.2018 0.587568C13.8441 0.355625 16.8793 0.0952808 19.8971 0.0209084C21.4101 -0.0163793 22.9486 -0.00776099 24.3254 0.0792144Z"
              fill="#FF6B4E"
            />
            <path
              d="M22.4306 18.7287C23.195 18.0518 23.6761 17.068 23.6761 15.9731C23.6761 13.9314 22.0031 12.2762 19.9394 12.2762C17.8757 12.2762 16.2027 13.9314 16.2027 15.9731C16.2027 17.3415 16.9542 18.5363 18.0711 19.1755V27.0638H22.4306V18.7287Z"
              fill="#FF6B4E"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'Superhuman'}
          available={false}
          about={'Verify SuperteamXP'}
          description={
            'If you are in superteam verify your xp or nft to claim this badge.'
          }
        >
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5528 4.90926H40V8.2893C40 12.8735 36.4243 16.5786 32.0002 16.5786H31.5528V4.90926ZM19.5311 0H31.5528V31.9073H30.1223C21.4079 31.9073 19.6647 25.6096 19.6647 20.0056L19.5311 0ZM0 7.22482C0 12.9204 3.9325 15.0048 8.31238 15.6996H0V32H7.99978C16.0449 32 16.9827 28.2949 16.9827 24.7752C16.9827 20.468 14.1228 17.4588 9.69759 16.3004H16.9827V0H8.9829C0.938952 0 0 3.70513 0 7.22482Z"
              fill="#F5A60D"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'Sol Developer'}
          available={false}
          about={'Verify Github Account '}
          description={
            'A active GitHub account should have Solana related repositories.'
          }
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 0C14.3332 0 12.1876 0.437381 10.1857 1.28717C8.18385 2.13696 6.36491 3.38251 4.83274 4.95272C1.73839 8.12389 0 12.4249 0 16.9096C0 24.3837 4.7355 30.7248 11.286 32.9738C12.111 33.1091 12.375 32.5849 12.375 32.1283V29.2706C7.8045 30.2852 6.831 27.0047 6.831 27.0047C6.072 25.0432 4.9995 24.519 4.9995 24.519C3.498 23.4706 5.115 23.5044 5.115 23.5044C6.765 23.6228 7.6395 25.2461 7.6395 25.2461C9.075 27.8164 11.5005 27.0554 12.441 26.6496C12.5895 25.5505 13.0185 24.8064 13.4805 24.3837C9.8175 23.961 5.973 22.5067 5.973 16.0642C5.973 14.1872 6.6 12.6822 7.6725 11.4816C7.5075 11.0589 6.93 9.3003 7.8375 7.0175C7.8375 7.0175 9.2235 6.56094 12.375 8.74229C13.6785 8.37027 15.0975 8.18427 16.5 8.18427C17.9025 8.18427 19.3215 8.37027 20.625 8.74229C23.7765 6.56094 25.1625 7.0175 25.1625 7.0175C26.07 9.3003 25.4925 11.0589 25.3275 11.4816C26.4 12.6822 27.027 14.1872 27.027 16.0642C27.027 22.5236 23.166 23.9441 19.4865 24.3668C20.0805 24.891 20.625 25.9225 20.625 27.4951V32.1283C20.625 32.5849 20.889 33.126 21.7305 32.9738C28.281 30.7079 33 24.3837 33 16.9096C33 14.689 32.5732 12.4902 31.744 10.4386C30.9148 8.38703 29.6994 6.52293 28.1673 4.95272C26.6351 3.38251 24.8162 2.13696 22.8143 1.28717C20.8124 0.437381 18.6668 0 16.5 0Z"
              fill="white"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'WOW'}
          available={false}
          about={'Connect Backpack Account'}
          description={
            'Connect your Backpack account and claim your wow badge.'
          }
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5557 0C12.2405 0 11.0829 1.8 10.7935 2.7C11.6617 2.59998 13.9191 2.4 16.0027 2.4C18.0864 2.4 20.3438 2.59998 21.212 2.7C20.5174 0.779992 18.8003 0.100012 18.0286 0H14.5557Z"
              fill="#F72435"
            />
            <path
              d="M6.16154 24.6C5.29489 24.6 5.01075 24.9 5.01075 26.4L5.00549 32.1C5.00549 33 5.58943 33 6.16809 33H25.8425C26.9998 33 26.9998 32.7 26.9998 32.25V25.8C26.9998 24.5027 26.1316 24.6 26.1316 24.6H6.16154Z"
              fill="#F72435"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3723 5.09999C6.04733 6.29999 4.90901 11.2 5.00549 13.5V20.7C5.00549 21.6 5.58429 21.9 6.16309 21.9H16.0027H25.8424C27 21.9 27 21.3 27 20.4V13.5C27 7.74001 22.3696 5.50001 20.0544 5.09999H11.3723ZM19.4756 11.4C19.4756 13.3882 17.9207 15 16.0027 15C14.0848 15 12.5299 13.3882 12.5299 11.4C12.5299 9.41176 14.0848 7.79999 16.0027 7.79999C17.9207 7.79999 19.4756 9.41176 19.4756 11.4Z"
              fill="#F72435"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'Cube'}
          available={false}
          about={'Vote 5 Projects'}
          description={'Vote at least 5 projects in a cubik funding round.'}
        >
          <svg
            width="28"
            height="33"
            viewBox="0 0 28 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6471 14.4342V8.63305L13.8235 1L1 8.63305V24.2045M26.6471 14.4342L13.8235 6.80112L6.24599 11.0756M26.6471 14.4342L23.3479 16.5714M6.24599 11.0756V15.3501L9.74332 13.2364M6.24599 11.0756L9.74332 13.2364M26.3556 24.2045V18.4034L23.3479 16.5714M26.3556 24.2045L13.8235 16.8768L1 24.2045M26.3556 24.2045L13.8235 32.1429L1 24.2045M9.74332 13.2364L13.8235 10.7703L23.3479 16.5714"
              stroke="white"
              strokeLinejoin="round"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'SNS'}
          available={false}
          about={'Verify SNS Domain'}
          description={
            'To claim this domain verify your solana Name Service Domain'
          }
        >
          <svg
            width="1284"
            height="1482"
            viewBox="0 0 1284 1482"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M643.5 35.5V350L982.5 547.5L981 939.5M981 939.5L1260.5 1100.5M981 939.5L641 1135L303.5 940.5L22.5 1100.5"
              stroke="#7C7CFF"
              strokeWidth="20"
            />
            <path
              d="M20.2751 1099.95V405.211L622 754.024V1447.36L20.2751 1099.95ZM662 1447.36V754.024L1263.72 405.211V1099.95L662 1447.36ZM642 23.094L1243.79 370.535L642 719.383L40.2146 370.535L642 23.094Z"
              stroke="#7C7CFF"
              strokeWidth="40"
            />
            <path
              d="M301.992 546.696L642 350.392L982.008 546.696V939.304L642 1135.61L301.992 939.304V546.696Z"
              stroke="#77E3EF"
              strokeWidth="18"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'Cube'}
          available={false}
          about={'Vote 5 Projects'}
          description={'Vote at least 5 projects in a cubik funding round.'}
        >
          <svg
            width="28"
            height="33"
            viewBox="0 0 28 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6471 14.4342V8.63305L13.8235 1L1 8.63305V24.2045M26.6471 14.4342L13.8235 6.80112L6.24599 11.0756M26.6471 14.4342L23.3479 16.5714M6.24599 11.0756V15.3501L9.74332 13.2364M6.24599 11.0756L9.74332 13.2364M26.3556 24.2045V18.4034L23.3479 16.5714M26.3556 24.2045L13.8235 16.8768L1 24.2045M26.3556 24.2045L13.8235 32.1429L1 24.2045M9.74332 13.2364L13.8235 10.7703L23.3479 16.5714"
              stroke="white"
              strokeLinejoin="round"
            />
          </svg>
        </BadgeCard>
        <BadgeCard
          name={'SNS'}
          available={false}
          about={'Verify SNS Domain'}
          description={
            'To claim this domain verify your solana Name Service Domain'
          }
        >
          <svg
            width="1284"
            height="1482"
            viewBox="0 0 1284 1482"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M643.5 35.5V350L982.5 547.5L981 939.5M981 939.5L1260.5 1100.5M981 939.5L641 1135L303.5 940.5L22.5 1100.5"
              stroke="#7C7CFF"
              strokeWidth="20"
            />
            <path
              d="M20.2751 1099.95V405.211L622 754.024V1447.36L20.2751 1099.95ZM662 1447.36V754.024L1263.72 405.211V1099.95L662 1447.36ZM642 23.094L1243.79 370.535L642 719.383L40.2146 370.535L642 23.094Z"
              stroke="#7C7CFF"
              strokeWidth="40"
            />
            <path
              d="M301.992 546.696L642 350.392L982.008 546.696V939.304L642 1135.61L301.992 939.304V546.696Z"
              stroke="#77E3EF"
              strokeWidth="18"
            />
          </svg>
        </BadgeCard>
      </Wrap> */}
    </Container>
  );
};

export default BadgesList;
