export type IDL = {
  version: '0.1.0';
  name: 'cubic_contract';
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
        },
        {
          name: 'metadata';
          type: 'string';
        }
      ];
    },
    {
      name: 'projectInit';
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
          name: 'projectname';
          type: 'string';
        },
        {
          name: 'metadata';
          type: 'string';
        }
      ];
    },
    {
      name: 'initChort';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'chortInitAccount';
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
          name: 'chortname';
          type: 'string';
        }
      ];
    },
    {
      name: 'joinChort';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'initChortAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'projectAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'projectChortAccount';
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
          name: 'chortname';
          type: 'string';
        },
        {
          name: 'projectname';
          type: 'string';
        }
      ];
    }
  ];
  accounts: [
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
            name: 'metadata';
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
      name: 'ProjectInit';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'metadata';
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
      name: 'InitChort';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'chortName';
            type: 'string';
          },
          {
            name: 'active';
            type: 'bool';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'ProjectChortInit';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'project';
            type: 'publicKey';
          },
          {
            name: 'chort';
            type: 'publicKey';
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
  version: '0.1.0',
  name: 'cubic_contract',
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
        {
          name: 'metadata',
          type: 'string',
        },
      ],
    },
    {
      name: 'projectInit',
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
          name: 'projectname',
          type: 'string',
        },
        {
          name: 'metadata',
          type: 'string',
        },
      ],
    },
    {
      name: 'initChort',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'chortInitAccount',
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
          name: 'chortname',
          type: 'string',
        },
      ],
    },
    {
      name: 'joinChort',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'initChortAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'projectAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'projectChortAccount',
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
          name: 'chortname',
          type: 'string',
        },
        {
          name: 'projectname',
          type: 'string',
        },
      ],
    },
  ],
  accounts: [
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
            name: 'metadata',
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
      name: 'ProjectInit',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'metadata',
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
      name: 'InitChort',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'chortName',
            type: 'string',
          },
          {
            name: 'active',
            type: 'bool',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'ProjectChortInit',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'project',
            type: 'publicKey',
          },
          {
            name: 'chort',
            type: 'publicKey',
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
