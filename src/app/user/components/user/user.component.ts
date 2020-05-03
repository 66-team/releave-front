import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  cart = faCartPlus;
  description = {
    title: 'Descrição',
    text: 'O blazer com corte clássico de alfaiataria é a peça curinga que veio para ficar no guarda-roupa feminino, sendo capaz de transformar qualquer produção básica em um look moderno e elegante.',
    pics: [
      'https://s3-alpha-sig.figma.com/img/a35f/5e0d/bb485667625043aaab0f0aa5a71006dd?Expires=1589155200&Signature=eOD1ksXk3qNRkYhSOpWlSFHygDs-xz3KsYJ3VXvtOOvjCYi1ClupEZhFj2eSPWtWjKW7BGnBiJFMd-FT0A~njbL~QBLCGvnPazH52-i1428XPAkagFenCEBtqAb~T4U9h5DZjqLV~jT79xzODzs5onDts4GDRJ8TD2eGDnb6~hL98VrOZkFe4vMYFtschRqxMxOc9wqJx1dJCedZWEbls3h7iE8g8Bg9z-L8wN2~hQ1FLPv2zzPmOUHAWGvAC4TOqxw1zZv7VP98-iUG9EHsDSML~bj2FwRiYcneZ~eAlzvzFDp1pKdbbzOzXSJdG2DQWx-0B-aQ0EUNgujwOxQdww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/fdb8/bf88/4a155fbccd0f5a5c5431c2dde4d255fe?Expires=1589155200&Signature=WYbuP6JlvP9u6D6qHhhFyaA3L2hhHcs76aRubJscmUZ1d22lEo2BCm7WpwVRpExAg3i9bni0FfobZLqPN8RlMlqOKfwGMdumDZcJnVsgv38mflR9rw6zMiWEIx7BLD4PLVMQiS3dgBWKMHcg~ZEZwFNUqCyeSJgtjybZ49hQVSyWMd5vUAWL0FIT5R~a1yKYdpFvrcNAzyXG8zJElghRwyRJHr5RF1PwibbfXmubytU-~wIwbkflCggoY5lT6WTgz37CoywuRlRPRkqbLBO0WacHvQyxm5HH2QbGjbPmdfct82wz5BQoUr~Y~H64nqd5fngglOl9nVAM8AryFYlllA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/439d/7521/cdbc5808181d664cdf3dbaa551b02866?Expires=1589155200&Signature=JMlNy6VNWAHTeDqXE2khRemidzoR2rpwOUfKxD39iy7Krtlh~0WtZtMPgzQp0aMFyAd9sFfVc1D8aJBAJ9Lu8-s3KpI~Pea5EhIoRxTty5yxWDqmGPH3fbdIVfrLPdg4MpaMWmFKWgW7NJR5n0vtLqSx4M2j3azm2yqGDQiTx-LxgGAY-xaiZrMuqxLrWX7~krY8KtBu6~JvqTx4g~RWJaKQxD~UY3u-zMpzYSNy4h7v2RP8T0nTGGHc5ZvUXOVoKlZd3IwfUX76hBQJjJlbLI4okxQsHNmqsCwoHZrBRJP8c9RnCHjS1W9fJ3LyJZmx7c~tlW0tMXMKLabOb92AGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    ]};

  constructor() { }

  ngOnInit(): void {
  }

}
