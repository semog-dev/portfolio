import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { email as emailValidator, FormField, form, required, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { firstValueFrom } from 'rxjs';
import { contatoPage, socialLinks } from '../../../shared/data/content';
import { BrandIcon } from '../../../shared/icons/brand-icon';

interface ContatoModel {
  nome: string;
  email: string;
  mensagem: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contato',
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BrandIcon,
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  private readonly http = inject(HttpClient);

  protected readonly contatoPage = contatoPage;
  protected readonly socialLinks = socialLinks;

  protected readonly status = signal<Status>('idle');

  private readonly model = signal<ContatoModel>({
    nome: '',
    email: '',
    mensagem: '',
  });

  protected readonly contactForm = form(this.model, (f) => {
    required(f.nome, { message: 'Informe seu nome' });
    required(f.email, { message: 'Informe seu e-mail' });
    emailValidator(f.email, { message: 'E-mail inválido' });
    required(f.mensagem, { message: 'Escreva uma mensagem' });
  });

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    this.contactForm().markAsTouched();
    if (!this.contactForm().valid()) {
      return;
    }

    this.status.set('sending');

    const success = await submit(this.contactForm, async () => {
      try {
        await firstValueFrom(
          this.http.post<{ success: true }>('/api/contato', this.contactForm().value())
        );
        return undefined;
      } catch {
        return [
          {
            fieldTree: this.contactForm,
            kind: 'server',
            message: contatoPage.errorMessage,
          },
        ];
      }
    });

    if (success) {
      this.status.set('success');
      this.model.set({ nome: '', email: '', mensagem: '' });
    } else {
      this.status.set('error');
    }
  }

  protected reset(): void {
    this.status.set('idle');
  }
}
