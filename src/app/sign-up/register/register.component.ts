import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  cpfFields = [
    {
      type: 'text',
      placeholder: 'Nome Completo',
      formControl: new FormControl(''),
      name: 'name'
    },
    {
      type: 'text',
      placeholder: 'Gênero',
      formControl: new FormControl(''),
      name: 'gender'
    },
    {
      type: 'text',
      placeholder: 'CPF',
      formControl: new FormControl(''),
      name: 'cpf'
    },
    {
      type: 'text',
      placeholder: 'Telefone',
      formControl: new FormControl(''),
      name: 'phone'
    },
    {
      type: 'text',
      placeholder: 'Nome de Usuário',
      formControl: new FormControl(''),
      name: 'username'
    },
    {
      type: 'password',
      placeholder: 'Senha',
      formControl: new FormControl(''),
      name: 'pwd'
    },
    {
      type: 'password',
      placeholder: 'Confirmar senha',
      formControl: new FormControl(''),
      name: 'checkPwd'
    },
  ];

  cnpjFields = [
    {
      type: 'text',
      placeholder: 'CNPJ',
      formControl: new FormControl(''),
      name: 'cnpj'
    },
    {
      type: 'text',
      placeholder: 'Faturamento por ano',
      formControl: new FormControl(''),
      name: 'revenues'
    },
    {
      type: 'text',
      placeholder: 'Nome fantasia',
      formControl: new FormControl(''),
      name: 'fantasyName'
    }
  ];

  addresFields = [
    {
      type: 'text',
      placeholder: 'CEP',
      formControl: new FormControl(''),
      name: 'cep'
    },
    {
      type: 'text',
      placeholder: 'Endereço',
      formControl: new FormControl(''),
      name: 'address'
    },
    {
      type: 'text',
      placeholder: 'Complemento',
      formControl: new FormControl(''),
      name: 'complement'
    },
    {
      type: 'text',
      placeholder: 'Bairro',
      formControl: new FormControl(''),
      name: 'neighborhood'
    },
    {
      type: 'text',
      placeholder: 'Cidade',
      formControl: new FormControl(''),
      name: 'city'
    },
    {
      type: 'text',
      placeholder: 'UF',
      formControl: new FormControl(''),
      name: 'name'
    }
  ];

  registerForm: FormGroup;
  regList = [];
  type: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params.type;
    });
    switch (this.type) {
      case 'cpf':
        this.regList = this.cpfFields;
        break;
      case 'cnpj':
        this.regList = this.cnpjFields;
        break;
    }
    this.regList = [...this.regList, ...this.addresFields]
    this.registerForm = this.fb.group({});
    this.regList.map(custom => {
      this.registerForm.addControl(custom.name, custom.formControl);
    });
  }

  submit() {
    if (this.type === 'cnpj') {
      this.router.navigate(['../home'], { queryParams: { user: 'cnpj' }, relativeTo: this.route.parent });
    } else {
      this.router.navigate(['../home'], { queryParams: { user: 'cpf' }, relativeTo: this.route.parent });
    }
  }

}
