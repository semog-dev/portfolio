import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { email as emailValidator, FormField, form, required, submit } from '@angular/forms/signals';
import { Github, Linkedin, LucideAngularModule, Mail } from 'lucide-angular';
import { firstValueFrom } from 'rxjs';
import { contatoPage, socialLinks } from '../../shared/data/content';

interface ContatoModel {
  nome: string;
  email: string;
  mensagem: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contato',
  imports: [FormField, LucideAngularModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  private readonly http = inject(HttpClient);

  protected readonly contatoPage = contatoPage;
  protected readonly socialLinks = socialLinks;

  protected readonly MailIcon = Mail;
  protected readonly GithubIcon = Github;
  protected readonly LinkedinIcon = Linkedin;

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
}
