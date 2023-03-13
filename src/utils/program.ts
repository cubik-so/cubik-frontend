export type IDL = {
  version: '0.2.0';
  name: 'cubik_contract';
  instructions: [
    {
      name: 'createUser';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'userId';
          type: 'string';
        }
      ];
    },
    {
      name: 'createProject';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'projectAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'projectId';
          type: 'string';
        }
      ];
    },
    {
      name: 'createRound';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'roundAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'roundId';
          type: 'string';
        },
        {
          name: 'matchingPool';
          type: 'u64';
        },
        {
          name: 'projectSize';
          type: 'u64';
        }
      ];
    },
    {
      name: 'createContribution';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'contributionAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'roundId';
          type: 'string';
        },
        {
          name: 'projectId';
          type: 'string';
        },
        {
          name: 'contributionId';
          type: 'string';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'usdAmount';
          type: 'u64';
        },
        {
          name: 'token';
          type: 'publicKey';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'Contribution';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'projectId';
            type: 'string';
          },
          {
            name: 'roundId';
            type: 'string';
          },
          {
            name: 'token';
            type: 'publicKey';
          },
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'Project';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'projectId';
            type: 'string';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'Round';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'roundId';
            type: 'string';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'poolSize';
            type: 'u64';
          },
          {
            name: 'projectSize';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'RoundJoin';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'roundId';
            type: 'string';
          },
          {
            name: 'approve';
            type: 'bool';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'projectId';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'User';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'userId';
            type: 'string';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    }
  ];
};
export const Idl: IDL = {
  version: '0.2.0',
  name: 'cubik_contract',
  instructions: [
    {
      name: 'createUser',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'userId',
          type: 'string',
        },
      ],
    },
    {
      name: 'createProject',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'projectId',
          type: 'string',
        },
      ],
    },
    {
      name: 'createRound',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'roundAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'roundId',
          type: 'string',
        },
        {
          name: 'matchingPool',
          type: 'u64',
        },
        {
          name: 'projectSize',
          type: 'u64',
        },
      ],
    },
    {
      name: 'createContribution',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'contributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'roundId',
          type: 'string',
        },
        {
          name: 'projectId',
          type: 'string',
        },
        {
          name: 'contributionId',
          type: 'string',
        },
        {
          name: 'amount',
          type: 'u64',
        },
        {
          name: 'usdAmount',
          type: 'u64',
        },
        {
          name: 'token',
          type: 'publicKey',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'Contribution',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'projectId',
            type: 'string',
          },
          {
            name: 'roundId',
            type: 'string',
          },
          {
            name: 'token',
            type: 'publicKey',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'Project',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'projectId',
            type: 'string',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'Round',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'roundId',
            type: 'string',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'poolSize',
            type: 'u64',
          },
          {
            name: 'projectSize',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'RoundJoin',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'roundId',
            type: 'string',
          },
          {
            name: 'approve',
            type: 'bool',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'projectId',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'User',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'userId',
            type: 'string',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
  ],
};
