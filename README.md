# nft app

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/thpGitHub/nft-app/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/thpGitHub/nft-app/tree/main)

L'api nous fourni 3 URL :

Récupération de 50 NFTs :

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)

Récupération d'un NFT et d'une erreur (fonctionnelle) :

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1)

Récupération d'une erreur 404 :

- [https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur](https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur)

L’api retourne 3 propriétés :

- data : un array de nft
- elements : le nombre d’element
- errors : un array d’erreurs

Exemple de format retour

```json
{
  "data": [
    {
      "createdAt": "2022-11-08T18:05:44.053Z",
      "title": "John Schroeder",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg",
      "description": "Fuga veritatis illum animi.",
      "creator": "Judd",
      "img": "http://loremflickr.com/640/480/nature",
      "expire": "639.00",
      "price": "675.00",
      "fetchedAt": "2022-11-08T19:29:17.500Z",
      "id": "1"
    }
  ],
  "elements": 1,
  "errors": [
    {
      "message": "Unknown ID"
    }
  ]
}
```
