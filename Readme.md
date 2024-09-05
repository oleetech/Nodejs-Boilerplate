npx typeorm migration:generate -d src/index.js src/migrations/initial-migration --outputJs

npx typeorm migration:run -d src/index.js


npx typeorm migration:generate -d src/index.js src/migrations/ipermission-migration --outputJs
```
express-backend-boilerplate
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ student
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 09eab9f0f9936b47bbcdc45a32881d68431569
│  │  ├─ 01
│  │  │  └─ 47cca2119becb475531043b441f39728be6bfc
│  │  ├─ 03
│  │  │  └─ eb67e510372fb36f08cad3b0982ab9ace95612
│  │  ├─ 05
│  │  │  └─ f524c0b34c1366f62d1ef5522302072e572043
│  │  ├─ 09
│  │  │  └─ 069c4f85944e0ce7a0e13dde93af01cb29a4ff
│  │  ├─ 0b
│  │  │  └─ b06b96bf809648d99a61ecc37aa9728a5b50e7
│  │  ├─ 14
│  │  │  └─ 0aaa9517023257fcc756b7c045c0a9fe748f13
│  │  ├─ 17
│  │  │  └─ bafe4aec0d6ee8e46d5507748dad2698e2b4b4
│  │  ├─ 1b
│  │  │  └─ 407779e6f489fe88691c360678448154427e56
│  │  ├─ 1f
│  │  │  └─ 883c1df1d7dfcf3acd6ba4d98ff776320365c2
│  │  ├─ 20
│  │  │  └─ 93c1ac92ecb143301f28d9d8c4c4763b91d900
│  │  ├─ 24
│  │  │  └─ 964252933576f3d0c7608ef1f76dcc79446a9e
│  │  ├─ 25
│  │  │  └─ 81d32875de0e1039a3d28d2ebaccdabf8539ca
│  │  ├─ 26
│  │  │  ├─ 3b1a127508a20057d83bbc7bb5c9577b2f47e3
│  │  │  └─ d731f1e4f56b8fbc021ccc9ad04a3d4e084f95
│  │  ├─ 27
│  │  │  └─ 68b5f755e0c4811e814acadede447e567cd035
│  │  ├─ 2a
│  │  │  ├─ 0cabd23e705b5e4863007d1a2284c0f82f3765
│  │  │  └─ 3a676b03b609ac2a4e37e6097583de170be18a
│  │  ├─ 2c
│  │  │  ├─ 2baed5252e52f52d290c8fa3499e145f8e6830
│  │  │  └─ 9d19ed5fc825d2f4f39314521caa83ca90a519
│  │  ├─ 32
│  │  │  └─ 4250e3375fdd624ea88c7cc874cfdeae5b254c
│  │  ├─ 33
│  │  │  └─ ecf189cb8ac893d269693f31fa841d5be59611
│  │  ├─ 36
│  │  │  └─ f2b08dceec242ef53798bbbab505eb17d10197
│  │  ├─ 38
│  │  │  └─ 61a107e4de9920e661d51885c10d06e8c54522
│  │  ├─ 39
│  │  │  └─ 7db00f8dfb1dd6940ee591098d8c1a76cc0738
│  │  ├─ 3d
│  │  │  └─ 3b2920f436e1e15a91cc92c6eb920ca7c68387
│  │  ├─ 3e
│  │  │  └─ 99adc23e26c38e106cc83d6e1d9803f43f1622
│  │  ├─ 43
│  │  │  └─ 8594f6e68cb1789ab8c0d59cd69990df07897f
│  │  ├─ 45
│  │  │  └─ c247db0470aea8194bfa05fcc2c71a132ab740
│  │  ├─ 46
│  │  │  └─ 411af7b61f9eea606557fbeaee895179c8f44c
│  │  ├─ 49
│  │  │  └─ 68c6958176e493e4d0e1be2649ad1eccf75894
│  │  ├─ 4d
│  │  │  ├─ 930ad7ca791deed427ae79b96920f872714b7c
│  │  │  └─ fb63eecfbe2870ee5f7a9a962bce335f462f25
│  │  ├─ 4e
│  │  │  └─ acbdd266ab764cece00f528dcaec6245f9ed3f
│  │  ├─ 56
│  │  │  └─ 6509144b897ba487b3bb37343bde8ed17926d4
│  │  ├─ 58
│  │  │  └─ fad5a3d881a7fe84933f7894bfa8908ab0fd93
│  │  ├─ 59
│  │  │  └─ d398f032204d926ee96a1775c780f87f782ef6
│  │  ├─ 60
│  │  │  └─ 653b79bceb274f0e6ed7db8d4a76a01ae9429c
│  │  ├─ 6e
│  │  │  └─ 819ec0c07540db88692d4c432a42af5ec9b1a7
│  │  ├─ 6f
│  │  │  └─ 3cee974e072b93c83c18f851f93b2f1cf398ae
│  │  ├─ 77
│  │  │  └─ bc0c46fe9ff963361cbe4a1abe68829c753870
│  │  ├─ 78
│  │  │  └─ d024b993e51d0b55cc92112775bad16be35292
│  │  ├─ 7c
│  │  │  └─ 9ab2e6f9c2558b3a83ae1d4267f2fa369fbe32
│  │  ├─ 7e
│  │  │  └─ 3a925ee37c37e8ee8bb7dc34c10596c7f9320e
│  │  ├─ 81
│  │  │  └─ 684fe50af56c5dbf9457f6550ae70790e91be6
│  │  ├─ 86
│  │  │  └─ 76a6e60926e0f01623e5185c58dde30382a325
│  │  ├─ 8b
│  │  │  └─ ebc4ba4bbc520f3e149754a046203df2c133e7
│  │  ├─ 8c
│  │  │  └─ 1713d6f78b921a3e991f97414ae41eb6451951
│  │  ├─ 8f
│  │  │  ├─ 7ea110311f86997671e7ed8778d223807144af
│  │  │  └─ e580af691e0b3ba1a283049adfbae23d80762e
│  │  ├─ 91
│  │  │  └─ b9098af39a047e53ad8856faaed174313a05c7
│  │  ├─ 93
│  │  │  └─ f13619916123cf5434dab2ffcc8263c7420af1
│  │  ├─ 98
│  │  │  └─ d6ecfdf751519f0d095c40d5ea43004780a60b
│  │  ├─ 9e
│  │  │  └─ df3d76df65d60cea6007e705f7d8904109d3a5
│  │  ├─ 9f
│  │  │  ├─ 5115c8be51c1ede426b34b5f354aa052b81f33
│  │  │  └─ c94914898dcccf5673d643926f428126a992cc
│  │  ├─ aa
│  │  │  └─ 889dabc658d8e32ba32d47196bdf72d275e016
│  │  ├─ af
│  │  │  └─ 25d83cd0b1833da25464172f5d1f702d71d21a
│  │  ├─ b6
│  │  │  └─ f7cf308cff18e1fc7028861ff317c8bd60c41d
│  │  ├─ b9
│  │  │  └─ f0abd83508bd8eccb29aee32c67e7cc1f099c7
│  │  ├─ be
│  │  │  └─ a4ca95fb990b4fd9768a5593e675f0edefbd2a
│  │  ├─ c0
│  │  │  └─ 01ef4e5aa848d580b6d29a15255cfe492fe64f
│  │  ├─ c3
│  │  │  └─ bcb0bc5138e3d23619013fd3637a6f4d1eead8
│  │  ├─ c7
│  │  │  ├─ 140045467a3480ed32313dd5323a95836925fe
│  │  │  └─ 77b1a54a941d1b9d055acd05c94f0eae3e0420
│  │  ├─ cb
│  │  │  └─ 719a6548bea54efa97a29d2b72ffafa4a11d83
│  │  ├─ cc
│  │  │  ├─ 8f3cdd99bc50ae0946f920c41338f76e572c27
│  │  │  └─ cdcce317222b03b67257e163406af76db8d612
│  │  ├─ cd
│  │  │  ├─ 10b327c6660b004eafdc83ad83001b33dcc1dd
│  │  │  └─ 915cc0bcb638b6399c1cbf0dc35defeda0e0e1
│  │  ├─ ce
│  │  │  └─ 903a08419e86b9b070ddd2fc828122d71ebde0
│  │  ├─ d1
│  │  │  ├─ 479aee2f6fc9de7df5208541ec1485a080e1e6
│  │  │  ├─ 482417cabac7b4d586574c67ca251bbcd2fec2
│  │  │  ├─ a220254f3ff6fb45421ebe3b9b171c65f035e3
│  │  │  └─ dd50dbc6385e595165c4a2c1165816c2b30a87
│  │  ├─ d2
│  │  │  └─ 5ecee678d9fdb0fa731aa11a14d4f94363c1be
│  │  ├─ d3
│  │  │  └─ b546192636bb8acd126786d4c878d469e1199c
│  │  ├─ d7
│  │  │  └─ 4fecdf9b850a5ce8dd7bdb85ba94481b30f402
│  │  ├─ d8
│  │  │  └─ 436164ebe7ec4fe1f0718b150cfda033535824
│  │  ├─ d9
│  │  │  └─ 31b738f136b19b7fce25bb3a1d487e5011d7b8
│  │  ├─ dd
│  │  │  └─ 3d2c6015bed9f565b1860a9db92f8a209ef90d
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ea
│  │  │  └─ c4465e0685541ad9c3d8abe3d7945e79d2761f
│  │  ├─ ee
│  │  │  ├─ 0e1a6c23817b01dd1e921435ae39036f116854
│  │  │  └─ 4ab73259d62466dd8f619a250c5c7dbfa7812f
│  │  ├─ f3
│  │  │  └─ da433e5ec1200a7192c5bde18b9c97fa6938f4
│  │  ├─ f9
│  │  │  └─ f1890a9cd7824c457f012c743d452c3063851b
│  │  ├─ fa
│  │  │  └─ 45875491b602136b86dddeac74dd93b2ad6a5f
│  │  ├─ fc
│  │  │  └─ fba05e4e7cf893e79064375db520ab5faa3f02
│  │  ├─ fe
│  │  │  └─ 4e170d5d4322b98e8b4ee3d4729d68d3ed2b2a
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ student
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ database.sqlite
├─ npx
├─ package.json
├─ Readme.md
├─ redoc.html
├─ src
│  ├─ config
│  │  └─ ormconfig.js
│  ├─ index.js
│  ├─ migrations
│  │  ├─ 1725345826052-migrations.js
│  │  ├─ 1725441831915-initial-migration.js
│  │  └─ 1725447853087-permission-migration.js
│  └─ modules
│     ├─ Authentication
│     │  ├─ controllers
│     │  │  ├─ permission.controller.js
│     │  │  ├─ role.controller.js
│     │  │  └─ userGroup.controller.js
│     │  ├─ entities
│     │  │  ├─ permission.entity.js
│     │  │  ├─ role.entity.js
│     │  │  ├─ user.entity.js
│     │  │  └─ userGroup.entity.js
│     │  ├─ routes
│     │  │  ├─ permission.routes.js
│     │  │  ├─ role.routes.js
│     │  │  └─ userGroup.routes.js
│     │  └─ services
│     │     ├─ permission.service.js
│     │     ├─ role.service.js
│     │     └─ userGroup.service.js
│     ├─ olee-redoc-api-doc
│     │  ├─ .gitignore
│     │  ├─ .npmignore
│     │  ├─ CHANGELOG.md
│     │  ├─ CODE_OF_CONDUCT.md
│     │  ├─ CONTRIBUTING.md
│     │  ├─ examples
│     │  │  ├─ advanced-configuration.js
│     │  │  └─ example-routes.js
│     │  ├─ package.json
│     │  ├─ README.md
│     │  ├─ src
│     │  │  ├─ index.js
│     │  │  ├─ redoc.html
│     │  │  └─ setupDocs.js
│     │  └─ test
│     │     └─ setupDocs.test.js
│     ├─ olee-send-email
│     │  ├─ .npmignore
│     │  ├─ index.js
│     │  ├─ npm
│     │  ├─ package.json
│     │  ├─ README.md
│     │  └─ src
│     │     └─ utils
│     │        └─ sendEmail.js
│     └─ student
│        ├─ .gitignore
│        ├─ controllers
│        │  └─ student.controller.js
│        ├─ entities
│        │  └─ student.entity.js
│        ├─ package.json
│        ├─ README.md
│        ├─ routes
│        │  └─ student.routes.js
│        ├─ services
│        │  └─ student.service.js
│        └─ studentModule.js
└─ swaggerConfig.js

```
```
express-backend-boilerplate
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ student
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 09eab9f0f9936b47bbcdc45a32881d68431569
│  │  ├─ 01
│  │  │  └─ 47cca2119becb475531043b441f39728be6bfc
│  │  ├─ 03
│  │  │  └─ eb67e510372fb36f08cad3b0982ab9ace95612
│  │  ├─ 05
│  │  │  └─ f524c0b34c1366f62d1ef5522302072e572043
│  │  ├─ 09
│  │  │  └─ 069c4f85944e0ce7a0e13dde93af01cb29a4ff
│  │  ├─ 0b
│  │  │  └─ b06b96bf809648d99a61ecc37aa9728a5b50e7
│  │  ├─ 14
│  │  │  └─ 0aaa9517023257fcc756b7c045c0a9fe748f13
│  │  ├─ 17
│  │  │  └─ bafe4aec0d6ee8e46d5507748dad2698e2b4b4
│  │  ├─ 1b
│  │  │  └─ 407779e6f489fe88691c360678448154427e56
│  │  ├─ 1f
│  │  │  └─ 883c1df1d7dfcf3acd6ba4d98ff776320365c2
│  │  ├─ 20
│  │  │  └─ 93c1ac92ecb143301f28d9d8c4c4763b91d900
│  │  ├─ 24
│  │  │  └─ 964252933576f3d0c7608ef1f76dcc79446a9e
│  │  ├─ 25
│  │  │  └─ 81d32875de0e1039a3d28d2ebaccdabf8539ca
│  │  ├─ 26
│  │  │  ├─ 3b1a127508a20057d83bbc7bb5c9577b2f47e3
│  │  │  └─ d731f1e4f56b8fbc021ccc9ad04a3d4e084f95
│  │  ├─ 27
│  │  │  └─ 68b5f755e0c4811e814acadede447e567cd035
│  │  ├─ 2a
│  │  │  ├─ 0cabd23e705b5e4863007d1a2284c0f82f3765
│  │  │  └─ 3a676b03b609ac2a4e37e6097583de170be18a
│  │  ├─ 2c
│  │  │  ├─ 2baed5252e52f52d290c8fa3499e145f8e6830
│  │  │  └─ 9d19ed5fc825d2f4f39314521caa83ca90a519
│  │  ├─ 32
│  │  │  └─ 4250e3375fdd624ea88c7cc874cfdeae5b254c
│  │  ├─ 33
│  │  │  └─ ecf189cb8ac893d269693f31fa841d5be59611
│  │  ├─ 36
│  │  │  └─ f2b08dceec242ef53798bbbab505eb17d10197
│  │  ├─ 38
│  │  │  └─ 61a107e4de9920e661d51885c10d06e8c54522
│  │  ├─ 39
│  │  │  └─ 7db00f8dfb1dd6940ee591098d8c1a76cc0738
│  │  ├─ 3d
│  │  │  └─ 3b2920f436e1e15a91cc92c6eb920ca7c68387
│  │  ├─ 3e
│  │  │  └─ 99adc23e26c38e106cc83d6e1d9803f43f1622
│  │  ├─ 43
│  │  │  └─ 8594f6e68cb1789ab8c0d59cd69990df07897f
│  │  ├─ 45
│  │  │  └─ c247db0470aea8194bfa05fcc2c71a132ab740
│  │  ├─ 46
│  │  │  └─ 411af7b61f9eea606557fbeaee895179c8f44c
│  │  ├─ 49
│  │  │  └─ 68c6958176e493e4d0e1be2649ad1eccf75894
│  │  ├─ 4d
│  │  │  ├─ 930ad7ca791deed427ae79b96920f872714b7c
│  │  │  └─ fb63eecfbe2870ee5f7a9a962bce335f462f25
│  │  ├─ 4e
│  │  │  └─ acbdd266ab764cece00f528dcaec6245f9ed3f
│  │  ├─ 56
│  │  │  └─ 6509144b897ba487b3bb37343bde8ed17926d4
│  │  ├─ 58
│  │  │  └─ fad5a3d881a7fe84933f7894bfa8908ab0fd93
│  │  ├─ 59
│  │  │  └─ d398f032204d926ee96a1775c780f87f782ef6
│  │  ├─ 60
│  │  │  └─ 653b79bceb274f0e6ed7db8d4a76a01ae9429c
│  │  ├─ 6e
│  │  │  └─ 819ec0c07540db88692d4c432a42af5ec9b1a7
│  │  ├─ 6f
│  │  │  └─ 3cee974e072b93c83c18f851f93b2f1cf398ae
│  │  ├─ 77
│  │  │  └─ bc0c46fe9ff963361cbe4a1abe68829c753870
│  │  ├─ 78
│  │  │  └─ d024b993e51d0b55cc92112775bad16be35292
│  │  ├─ 7c
│  │  │  └─ 9ab2e6f9c2558b3a83ae1d4267f2fa369fbe32
│  │  ├─ 7e
│  │  │  └─ 3a925ee37c37e8ee8bb7dc34c10596c7f9320e
│  │  ├─ 81
│  │  │  └─ 684fe50af56c5dbf9457f6550ae70790e91be6
│  │  ├─ 86
│  │  │  └─ 76a6e60926e0f01623e5185c58dde30382a325
│  │  ├─ 8b
│  │  │  └─ ebc4ba4bbc520f3e149754a046203df2c133e7
│  │  ├─ 8c
│  │  │  └─ 1713d6f78b921a3e991f97414ae41eb6451951
│  │  ├─ 8f
│  │  │  ├─ 7ea110311f86997671e7ed8778d223807144af
│  │  │  └─ e580af691e0b3ba1a283049adfbae23d80762e
│  │  ├─ 91
│  │  │  └─ b9098af39a047e53ad8856faaed174313a05c7
│  │  ├─ 93
│  │  │  └─ f13619916123cf5434dab2ffcc8263c7420af1
│  │  ├─ 98
│  │  │  └─ d6ecfdf751519f0d095c40d5ea43004780a60b
│  │  ├─ 9e
│  │  │  └─ df3d76df65d60cea6007e705f7d8904109d3a5
│  │  ├─ 9f
│  │  │  ├─ 5115c8be51c1ede426b34b5f354aa052b81f33
│  │  │  └─ c94914898dcccf5673d643926f428126a992cc
│  │  ├─ aa
│  │  │  └─ 889dabc658d8e32ba32d47196bdf72d275e016
│  │  ├─ af
│  │  │  └─ 25d83cd0b1833da25464172f5d1f702d71d21a
│  │  ├─ b6
│  │  │  └─ f7cf308cff18e1fc7028861ff317c8bd60c41d
│  │  ├─ b9
│  │  │  └─ f0abd83508bd8eccb29aee32c67e7cc1f099c7
│  │  ├─ be
│  │  │  └─ a4ca95fb990b4fd9768a5593e675f0edefbd2a
│  │  ├─ c0
│  │  │  └─ 01ef4e5aa848d580b6d29a15255cfe492fe64f
│  │  ├─ c3
│  │  │  └─ bcb0bc5138e3d23619013fd3637a6f4d1eead8
│  │  ├─ c7
│  │  │  ├─ 140045467a3480ed32313dd5323a95836925fe
│  │  │  └─ 77b1a54a941d1b9d055acd05c94f0eae3e0420
│  │  ├─ cb
│  │  │  └─ 719a6548bea54efa97a29d2b72ffafa4a11d83
│  │  ├─ cc
│  │  │  ├─ 8f3cdd99bc50ae0946f920c41338f76e572c27
│  │  │  └─ cdcce317222b03b67257e163406af76db8d612
│  │  ├─ cd
│  │  │  ├─ 10b327c6660b004eafdc83ad83001b33dcc1dd
│  │  │  └─ 915cc0bcb638b6399c1cbf0dc35defeda0e0e1
│  │  ├─ ce
│  │  │  └─ 903a08419e86b9b070ddd2fc828122d71ebde0
│  │  ├─ d1
│  │  │  ├─ 479aee2f6fc9de7df5208541ec1485a080e1e6
│  │  │  ├─ 482417cabac7b4d586574c67ca251bbcd2fec2
│  │  │  ├─ a220254f3ff6fb45421ebe3b9b171c65f035e3
│  │  │  └─ dd50dbc6385e595165c4a2c1165816c2b30a87
│  │  ├─ d2
│  │  │  └─ 5ecee678d9fdb0fa731aa11a14d4f94363c1be
│  │  ├─ d3
│  │  │  └─ b546192636bb8acd126786d4c878d469e1199c
│  │  ├─ d7
│  │  │  └─ 4fecdf9b850a5ce8dd7bdb85ba94481b30f402
│  │  ├─ d8
│  │  │  └─ 436164ebe7ec4fe1f0718b150cfda033535824
│  │  ├─ d9
│  │  │  └─ 31b738f136b19b7fce25bb3a1d487e5011d7b8
│  │  ├─ dd
│  │  │  └─ 3d2c6015bed9f565b1860a9db92f8a209ef90d
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ea
│  │  │  └─ c4465e0685541ad9c3d8abe3d7945e79d2761f
│  │  ├─ ee
│  │  │  ├─ 0e1a6c23817b01dd1e921435ae39036f116854
│  │  │  └─ 4ab73259d62466dd8f619a250c5c7dbfa7812f
│  │  ├─ f3
│  │  │  └─ da433e5ec1200a7192c5bde18b9c97fa6938f4
│  │  ├─ f9
│  │  │  └─ f1890a9cd7824c457f012c743d452c3063851b
│  │  ├─ fa
│  │  │  └─ 45875491b602136b86dddeac74dd93b2ad6a5f
│  │  ├─ fc
│  │  │  └─ fba05e4e7cf893e79064375db520ab5faa3f02
│  │  ├─ fe
│  │  │  └─ 4e170d5d4322b98e8b4ee3d4729d68d3ed2b2a
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ student
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ database.sqlite
├─ npx
├─ package.json
├─ Readme.md
├─ redoc.html
├─ src
│  ├─ config
│  │  └─ ormconfig.js
│  ├─ index.js
│  ├─ migrations
│  │  ├─ 1725345826052-migrations.js
│  │  ├─ 1725441831915-initial-migration.js
│  │  └─ 1725447853087-permission-migration.js
│  └─ modules
│     ├─ Authentication
│     │  ├─ controllers
│     │  │  ├─ permission.controller.js
│     │  │  ├─ role.controller.js
│     │  │  └─ userGroup.controller.js
│     │  ├─ entities
│     │  │  ├─ permission.entity.js
│     │  │  ├─ role.entity.js
│     │  │  ├─ user.entity.js
│     │  │  └─ userGroup.entity.js
│     │  ├─ routes
│     │  │  ├─ permission.routes.js
│     │  │  ├─ role.routes.js
│     │  │  └─ userGroup.routes.js
│     │  └─ services
│     │     ├─ permission.service.js
│     │     ├─ role.service.js
│     │     └─ userGroup.service.js
│     ├─ olee-redoc-api-doc
│     │  ├─ .gitignore
│     │  ├─ .npmignore
│     │  ├─ CHANGELOG.md
│     │  ├─ CODE_OF_CONDUCT.md
│     │  ├─ CONTRIBUTING.md
│     │  ├─ examples
│     │  │  ├─ advanced-configuration.js
│     │  │  └─ example-routes.js
│     │  ├─ package.json
│     │  ├─ README.md
│     │  ├─ src
│     │  │  ├─ index.js
│     │  │  ├─ redoc.html
│     │  │  └─ setupDocs.js
│     │  └─ test
│     │     └─ setupDocs.test.js
│     ├─ olee-send-email
│     │  ├─ .npmignore
│     │  ├─ index.js
│     │  ├─ npm
│     │  ├─ package.json
│     │  ├─ README.md
│     │  └─ src
│     │     └─ utils
│     │        └─ sendEmail.js
│     └─ student
│        ├─ .gitignore
│        ├─ controllers
│        │  └─ student.controller.js
│        ├─ entities
│        │  └─ student.entity.js
│        ├─ package.json
│        ├─ README.md
│        ├─ routes
│        │  └─ student.routes.js
│        ├─ services
│        │  └─ student.service.js
│        └─ studentModule.js
└─ swaggerConfig.js

```
```
express-backend-boilerplate
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ student
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 09eab9f0f9936b47bbcdc45a32881d68431569
│  │  ├─ 01
│  │  │  └─ 47cca2119becb475531043b441f39728be6bfc
│  │  ├─ 03
│  │  │  └─ eb67e510372fb36f08cad3b0982ab9ace95612
│  │  ├─ 05
│  │  │  └─ f524c0b34c1366f62d1ef5522302072e572043
│  │  ├─ 09
│  │  │  └─ 069c4f85944e0ce7a0e13dde93af01cb29a4ff
│  │  ├─ 0b
│  │  │  └─ b06b96bf809648d99a61ecc37aa9728a5b50e7
│  │  ├─ 14
│  │  │  └─ 0aaa9517023257fcc756b7c045c0a9fe748f13
│  │  ├─ 17
│  │  │  └─ bafe4aec0d6ee8e46d5507748dad2698e2b4b4
│  │  ├─ 1b
│  │  │  └─ 407779e6f489fe88691c360678448154427e56
│  │  ├─ 1f
│  │  │  └─ 883c1df1d7dfcf3acd6ba4d98ff776320365c2
│  │  ├─ 20
│  │  │  └─ 93c1ac92ecb143301f28d9d8c4c4763b91d900
│  │  ├─ 24
│  │  │  └─ 964252933576f3d0c7608ef1f76dcc79446a9e
│  │  ├─ 25
│  │  │  └─ 81d32875de0e1039a3d28d2ebaccdabf8539ca
│  │  ├─ 26
│  │  │  ├─ 3b1a127508a20057d83bbc7bb5c9577b2f47e3
│  │  │  └─ d731f1e4f56b8fbc021ccc9ad04a3d4e084f95
│  │  ├─ 27
│  │  │  └─ 68b5f755e0c4811e814acadede447e567cd035
│  │  ├─ 2a
│  │  │  ├─ 0cabd23e705b5e4863007d1a2284c0f82f3765
│  │  │  └─ 3a676b03b609ac2a4e37e6097583de170be18a
│  │  ├─ 2c
│  │  │  ├─ 2baed5252e52f52d290c8fa3499e145f8e6830
│  │  │  └─ 9d19ed5fc825d2f4f39314521caa83ca90a519
│  │  ├─ 32
│  │  │  └─ 4250e3375fdd624ea88c7cc874cfdeae5b254c
│  │  ├─ 33
│  │  │  └─ ecf189cb8ac893d269693f31fa841d5be59611
│  │  ├─ 36
│  │  │  └─ f2b08dceec242ef53798bbbab505eb17d10197
│  │  ├─ 38
│  │  │  └─ 61a107e4de9920e661d51885c10d06e8c54522
│  │  ├─ 39
│  │  │  └─ 7db00f8dfb1dd6940ee591098d8c1a76cc0738
│  │  ├─ 3d
│  │  │  └─ 3b2920f436e1e15a91cc92c6eb920ca7c68387
│  │  ├─ 3e
│  │  │  └─ 99adc23e26c38e106cc83d6e1d9803f43f1622
│  │  ├─ 43
│  │  │  └─ 8594f6e68cb1789ab8c0d59cd69990df07897f
│  │  ├─ 45
│  │  │  └─ c247db0470aea8194bfa05fcc2c71a132ab740
│  │  ├─ 46
│  │  │  └─ 411af7b61f9eea606557fbeaee895179c8f44c
│  │  ├─ 49
│  │  │  └─ 68c6958176e493e4d0e1be2649ad1eccf75894
│  │  ├─ 4d
│  │  │  ├─ 930ad7ca791deed427ae79b96920f872714b7c
│  │  │  └─ fb63eecfbe2870ee5f7a9a962bce335f462f25
│  │  ├─ 4e
│  │  │  └─ acbdd266ab764cece00f528dcaec6245f9ed3f
│  │  ├─ 56
│  │  │  └─ 6509144b897ba487b3bb37343bde8ed17926d4
│  │  ├─ 58
│  │  │  └─ fad5a3d881a7fe84933f7894bfa8908ab0fd93
│  │  ├─ 59
│  │  │  └─ d398f032204d926ee96a1775c780f87f782ef6
│  │  ├─ 60
│  │  │  └─ 653b79bceb274f0e6ed7db8d4a76a01ae9429c
│  │  ├─ 6e
│  │  │  └─ 819ec0c07540db88692d4c432a42af5ec9b1a7
│  │  ├─ 6f
│  │  │  └─ 3cee974e072b93c83c18f851f93b2f1cf398ae
│  │  ├─ 77
│  │  │  └─ bc0c46fe9ff963361cbe4a1abe68829c753870
│  │  ├─ 78
│  │  │  └─ d024b993e51d0b55cc92112775bad16be35292
│  │  ├─ 7c
│  │  │  └─ 9ab2e6f9c2558b3a83ae1d4267f2fa369fbe32
│  │  ├─ 7e
│  │  │  └─ 3a925ee37c37e8ee8bb7dc34c10596c7f9320e
│  │  ├─ 81
│  │  │  └─ 684fe50af56c5dbf9457f6550ae70790e91be6
│  │  ├─ 86
│  │  │  └─ 76a6e60926e0f01623e5185c58dde30382a325
│  │  ├─ 8b
│  │  │  └─ ebc4ba4bbc520f3e149754a046203df2c133e7
│  │  ├─ 8c
│  │  │  └─ 1713d6f78b921a3e991f97414ae41eb6451951
│  │  ├─ 8f
│  │  │  ├─ 7ea110311f86997671e7ed8778d223807144af
│  │  │  └─ e580af691e0b3ba1a283049adfbae23d80762e
│  │  ├─ 91
│  │  │  └─ b9098af39a047e53ad8856faaed174313a05c7
│  │  ├─ 93
│  │  │  └─ f13619916123cf5434dab2ffcc8263c7420af1
│  │  ├─ 98
│  │  │  └─ d6ecfdf751519f0d095c40d5ea43004780a60b
│  │  ├─ 9e
│  │  │  └─ df3d76df65d60cea6007e705f7d8904109d3a5
│  │  ├─ 9f
│  │  │  ├─ 5115c8be51c1ede426b34b5f354aa052b81f33
│  │  │  └─ c94914898dcccf5673d643926f428126a992cc
│  │  ├─ aa
│  │  │  └─ 889dabc658d8e32ba32d47196bdf72d275e016
│  │  ├─ af
│  │  │  └─ 25d83cd0b1833da25464172f5d1f702d71d21a
│  │  ├─ b6
│  │  │  └─ f7cf308cff18e1fc7028861ff317c8bd60c41d
│  │  ├─ b9
│  │  │  └─ f0abd83508bd8eccb29aee32c67e7cc1f099c7
│  │  ├─ be
│  │  │  └─ a4ca95fb990b4fd9768a5593e675f0edefbd2a
│  │  ├─ c0
│  │  │  └─ 01ef4e5aa848d580b6d29a15255cfe492fe64f
│  │  ├─ c3
│  │  │  └─ bcb0bc5138e3d23619013fd3637a6f4d1eead8
│  │  ├─ c7
│  │  │  ├─ 140045467a3480ed32313dd5323a95836925fe
│  │  │  └─ 77b1a54a941d1b9d055acd05c94f0eae3e0420
│  │  ├─ cb
│  │  │  └─ 719a6548bea54efa97a29d2b72ffafa4a11d83
│  │  ├─ cc
│  │  │  ├─ 8f3cdd99bc50ae0946f920c41338f76e572c27
│  │  │  └─ cdcce317222b03b67257e163406af76db8d612
│  │  ├─ cd
│  │  │  ├─ 10b327c6660b004eafdc83ad83001b33dcc1dd
│  │  │  └─ 915cc0bcb638b6399c1cbf0dc35defeda0e0e1
│  │  ├─ ce
│  │  │  └─ 903a08419e86b9b070ddd2fc828122d71ebde0
│  │  ├─ d1
│  │  │  ├─ 479aee2f6fc9de7df5208541ec1485a080e1e6
│  │  │  ├─ 482417cabac7b4d586574c67ca251bbcd2fec2
│  │  │  ├─ a220254f3ff6fb45421ebe3b9b171c65f035e3
│  │  │  └─ dd50dbc6385e595165c4a2c1165816c2b30a87
│  │  ├─ d2
│  │  │  └─ 5ecee678d9fdb0fa731aa11a14d4f94363c1be
│  │  ├─ d3
│  │  │  └─ b546192636bb8acd126786d4c878d469e1199c
│  │  ├─ d7
│  │  │  └─ 4fecdf9b850a5ce8dd7bdb85ba94481b30f402
│  │  ├─ d8
│  │  │  └─ 436164ebe7ec4fe1f0718b150cfda033535824
│  │  ├─ d9
│  │  │  └─ 31b738f136b19b7fce25bb3a1d487e5011d7b8
│  │  ├─ dd
│  │  │  └─ 3d2c6015bed9f565b1860a9db92f8a209ef90d
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ea
│  │  │  └─ c4465e0685541ad9c3d8abe3d7945e79d2761f
│  │  ├─ ee
│  │  │  ├─ 0e1a6c23817b01dd1e921435ae39036f116854
│  │  │  └─ 4ab73259d62466dd8f619a250c5c7dbfa7812f
│  │  ├─ f3
│  │  │  └─ da433e5ec1200a7192c5bde18b9c97fa6938f4
│  │  ├─ f9
│  │  │  └─ f1890a9cd7824c457f012c743d452c3063851b
│  │  ├─ fa
│  │  │  └─ 45875491b602136b86dddeac74dd93b2ad6a5f
│  │  ├─ fc
│  │  │  └─ fba05e4e7cf893e79064375db520ab5faa3f02
│  │  ├─ fe
│  │  │  └─ 4e170d5d4322b98e8b4ee3d4729d68d3ed2b2a
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ student
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ database.sqlite
├─ npx
├─ package.json
├─ Readme.md
├─ redoc.html
├─ src
│  ├─ config
│  │  └─ ormconfig.js
│  ├─ index.js
│  ├─ migrations
│  │  ├─ 1725345826052-migrations.js
│  │  ├─ 1725441831915-initial-migration.js
│  │  └─ 1725447853087-permission-migration.js
│  └─ modules
│     ├─ Authentication
│     │  ├─ controllers
│     │  │  ├─ permission.controller.js
│     │  │  ├─ role.controller.js
│     │  │  └─ userGroup.controller.js
│     │  ├─ entities
│     │  │  ├─ permission.entity.js
│     │  │  ├─ role.entity.js
│     │  │  ├─ user.entity.js
│     │  │  └─ userGroup.entity.js
│     │  ├─ routes
│     │  │  ├─ permission.routes.js
│     │  │  ├─ role.routes.js
│     │  │  └─ userGroup.routes.js
│     │  └─ services
│     │     ├─ permission.service.js
│     │     ├─ role.service.js
│     │     └─ userGroup.service.js
│     ├─ olee-redoc-api-doc
│     │  ├─ .gitignore
│     │  ├─ .npmignore
│     │  ├─ CHANGELOG.md
│     │  ├─ CODE_OF_CONDUCT.md
│     │  ├─ CONTRIBUTING.md
│     │  ├─ examples
│     │  │  ├─ advanced-configuration.js
│     │  │  └─ example-routes.js
│     │  ├─ package.json
│     │  ├─ README.md
│     │  ├─ src
│     │  │  ├─ index.js
│     │  │  ├─ redoc.html
│     │  │  └─ setupDocs.js
│     │  └─ test
│     │     └─ setupDocs.test.js
│     ├─ olee-send-email
│     │  ├─ .npmignore
│     │  ├─ index.js
│     │  ├─ npm
│     │  ├─ package.json
│     │  ├─ README.md
│     │  └─ src
│     │     └─ utils
│     │        └─ sendEmail.js
│     └─ student
│        ├─ .gitignore
│        ├─ controllers
│        │  └─ student.controller.js
│        ├─ entities
│        │  └─ student.entity.js
│        ├─ package.json
│        ├─ README.md
│        ├─ routes
│        │  └─ student.routes.js
│        ├─ services
│        │  └─ student.service.js
│        └─ studentModule.js
└─ swaggerConfig.js

```