---
title: 'iOSショートカットでヘルスケアとPixelaに水分摂取量を記録する'
slug: 'iOSショートカットでヘルスケアとPixelaに水分摂取量を記録する'
publishedOn: 2020-01-18
createdAt: 2020-01-18 13:09:50 +0900
updatedAt: 2020-01-18 13:11:48 +0900
---
2020年のテーマは**計測**。計測すれば改善できる!

現代人は水不足と言われているらしい。自分自身の生活をふりかえっても、水分をとるのはごはんのときだけということも少なくないので、水分摂取量を記録して改善しようと試みている。

iOSのヘルスケアアプリには水分摂取量を記録する機能があり、それを利用するアプリもいくつかある。また、アプリを使わなくても、iOSのショートカットのサンプルにも水分量を記録するものがあるので、それを使えば簡単に記録することができる。**ただ、やっぱりインターネットで見たい！**

というわけで、ヘルスケアアプリと同時に[Pixela](https://pixe.la/ja)にも記録するようにした。

ヘルスケアアプリに記録する部分は、ショートカットのサンプルと同様。

選択肢については、普段使っているマグカップやタンブラーの容量を量っておいた。目安としては、マグカップや小さいペットボトルが300ml、多めのタンブラーが400ml、大きいペットボトルが500mlという感じ。たまに小さいカップを使うことがあるので、それ用に200mlを追加しておいた。登録する部分はそのまま、単位を間違えなければ大丈夫。

![](https://lh3.googleusercontent.com/7bauyRltL3oyJidLpUOGqt2qWXd-1lBXeh18-l-3n9ZABJOGAdjqu3-gNfGMQ6BDJyH_teYzq6BAgsDUQhy_NrDQUPOnhRtNp8pvDIU-4oWZYrRyzTQ6rZhxVQrAFvAh3obmHkTBNDjlmh7IBiO8fYY0Nb46gg0-zqln8YwPpYpvCae3Lz0-zHgBTz0607jwYFffP0t723GBtLo69YvJzBS0GDCAZHhXpo50THLPwfYEjILO4xB7M9RMgw_OYRkflPTaiASwMuHu2ANzbeKch_-EeoUvexgxKBvqVlUe9RZ-_mQygZ5MkcL4O8wNhVo0qNXQI2EL1W1luWXRpnfKQguMnvCJx36vsjHMl6XwunvdDtjlFuSkJcPK2h0YWVCqLwbRLigJ3s1Y5vq5MFkadWwFQb-pM42ugakxxH97jnn5BuE1umF_hbqZqh1X8OlXt2W4Z_E60ZJ7agoIhkjkhhIQZr6a4O3ZaD5OllhpDZTFEKg0JiyG99UfohGeALxRCZXr0je8MAccrCc8lMRJbByrf-Ts2pk4G0zi5rjuopNR-fH7F3eBHpi3K2hamv-Cm5be2IQ755yxTAEMUCpMLP043Cvc1cRH0Uj32rds4_QC6dndHQwffAIE6nFnQrCSUIUzkinLa-DfrHMY1WU4rPxpMiTOXDPITVuP1E5G-aX0SL6xcOtf8h68NBQil-6aqKoR8mY74GDLvMxyC-PVmOytxAgDR7YUhzSxni8bHbAs9j4h=h600-no)

ちょっと難しいのはPixelaに送る部分。というのも、Pixelaの数字を更新する方法はincrement(decrement)とupdateの2つがあるが、たとえばincrementでは`+200`のようなことができないし(200回叩けばいいけど……)、updateではその日の合計をどうにかして計算しないといけない。

これは、ショートカットの中でヘルスケアアプリの情報を集計する機能を利用して、当日の摂取量を計算することにした。ここがこの仕組みで一番苦労した部分。

![](https://lh3.googleusercontent.com/q4HDnK0QpcwqkpIUNj8go-dzmySqM-9f_X40P0QRcPgElmY_byE7A_HqYWfqEpcW-iOvOjHWbXOrh8MbNG0yOWccdYQMmUooCTcBQzTD6a5NhPC6UcweHJG4oBjLdbKMbN9zgYHy7gmPf0N8ueCQFQsDbFvUv7rk80xsT_azRjOytT4rSgoW2SGj2kHbXHxdWNk_ysRQfg3fNKpwoponrAXZxpP0Yr6VW6Kb4F6ZC5BHi26oyVuuZljZ4d0R2uyyM_Y5mgb0-ilOIN4UwZLS6bkN1gXm0ibEdqK4efyFf_Y4TwWUKnb9cY6rmZu0ht75YjqcdxKELzImK55gJtGWy86M53eZIY5XneGxMi9m-KIwmYiHQwO-VzJYo7bWWYNDuMlD8ZtQTSG8784rfzEZbZCUvxSC8h21GIx3hmixJwEHhqMhR4l63XDlZGJnDxLsrjVIKQiI7xXYmSumWhdKrpbYgiBZ-6FDtLPqXtzoBPN0eZcc6MepB1O0eEwlcXNXHv-AEaHDBAK96oiqQzY9ac5wEErnjAom7O96a1YpapCD4YhSyg37gTZcRhDOOdemq2Nk-JLBb9azVDqSK5T_soYeO8cAwNPJn4KpxAa6iPGHCzeHaLeptRqDnNKjFxcbUmiJPgm7d-hIbC6msYuRAMtl7yhGknDjn59KxofWqTV9Z8C1mBL6W0EOY_uujTA2d8NO59j4eYEMm5s09FpGDos17_3A84GbVv1yjmJA5GWlJCE2=h600-no)

あとは、URLを叩く機能をうまく使えばできあがり。

![](https://lh3.googleusercontent.com/v5SNvv7i4DdhWZ2O09RK9PUQeC49xfUNZVNsVmLM0wjyOQDwAG8EyQ9DyytwtYVxZmry9uTpGZKYdK9ihAgOMZFgY7s_ovfqRooHnJtUhlz7xnKqZq2iZi3NANY827wV7biEovx8x9nsBdnVr3fObqM0_A_tYtAmmEWDS9sLajglj0-t8cEqPJeSUmqww4je7pbZQJJmA5hl-oXRWf7-OEjVLT_uUKcdEorT_xy39UMBwwWGA-BTjzEXJQ1mX2uHOxjqi8_les_CE2ksSth00BSJGLlfuoP6sSEjtilm_JEhNumCJk-mwjslwt3a3OvchY8Vz3NVSPKr8fsDbzSxZy2tZpZ6DaerHE6fiQrLihoJHxy_941lOlfK8UcTLF351Ejgq1DpXP9QPlX-jKtTiH2A1V23vSknIYnhQUjuF3UbJe4qKexMuN2kzgSq_POWW5UYzvAik0aUqkaTKHe_WD931T958gtLc_PHDQFbA501nIF3PKeLcfWNMt1Ip29tGuj-JGuZ5rxMOxzY3h4Z8VY7iyEKZpu0VWSyRdUxZAj6wI1ChIw4i3_TMIqb2ODQgZW2aDu7EzNz5Nx2McfdbAi_vVvpXc76AdK7S0oNonO_LtB9OA1A9CG2Qziy8x9uFvtrnBCmXEezmqZIC7xDG68l2TpH0WjZmFGs1rWXLUMvajL3X0UhYf8=h600)

出来上がった草がこちら。

[kenchan/水分 | Pixela](https://pixe.la/v1/users/kenchan/graphs/water.html)
![](https://pixe.la/v1/users/kenchan/graphs/water.svg)

Pixelaは、本家(?)GitHubと同様に相対的な大きさで色が変わるようなので、よく飲んだ日とあまり飲まなかった日が視覚的にもわかりやすくてとてもよい！

iOSのショートカットは、広く共有できるような仕組みがたぶんないし、トークンをハードコードしちゃってるので、同じようにやってみたい人はスクショを参考にしてください。

まだ1週間くらいだけど、若干体調もよくなったような気がしてる。特にお通じ面はだいぶよくなったように感じるので、今後も続けて経過観察していこうと思う。
