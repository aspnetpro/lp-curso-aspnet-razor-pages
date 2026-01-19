import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { PlayCircle, Clock } from "lucide-react";

const modules = [
  {
    title: "Introdução",
    lessons: [
      { name: "Qual objetivo do curso?", duration: "3:53" },
      { name: "Para que serve o ASP .NET Razor Pages?", duration: "3:08" },
      { name: "O que iremos (e não iremos) aprender?", duration: "3:37" },
      { name: "Requisitos mínimos para o curso", duration: "1:01" },
      { name: "Tecnologia, Bibliotecas e Ferramentas", duration: "3:46" },
      { name: "Sobre o projeto - Blog pessoal", duration: "3:51" },
      { name: "Requisitos do projeto", duration: "4:42" }
    ]
  },
  {
    title: "Módulo 1 - Preparando o Ambiente",
    lessons: [
      { name: "Instalando as ferramentas", duration: "4:34" },
      { name: "Criando o projeto no Azure DevOps", duration: "5:16" },
      { name: "Cadastrando os requisitos no Board", duration: "4:28" },
      { name: "Criando o repositório Git", duration: "3:11" },
      { name: "Criando um aplicativo web no Azure", duration: "6:45" },
      { name: "Criando um banco de dados SQL Server no Azure", duration: "10:01" },
      { name: "Configurando deploy automatizado", duration: "2:50" },
      { name: "Criando o projeto ASP .NET Razor Pages", duration: "8:25" },
      { name: "Realizando o primeiro commit", duration: "8:46" }
    ]
  },
  {
    title: "Módulo 2 - Blog (Parte 1)",
    lessons: [
      { name: "Conhecendo o template do Blog", duration: "3:36" },
      { name: "Aplicar o template no projeto", duration: "3:36" },
      { name: "Criando a página de posts", duration: "11:50" },
      { name: "Configurando acesso a dados (Entity Framework)", duration: "10:07" },
      { name: "Criando a entidade Post", duration: "6:17" },
      { name: "Mapeamento da classe Post no EF", duration: "5:24" },
      { name: "Utilizando EF Migrations para gerar o banco de dados", duration: "2:45" },
      { name: "Listando posts na página inicial", duration: "11:23" },
      { name: "Trabalhando com ViewModels", duration: "7:42" },
      { name: "Configurando Connection String no Azure", duration: "2:16" },
      { name: "Definindo o layout do Blog", duration: "10:43" },
      { name: "Organizando o layout com PartialView", duration: "11:45" },
      { name: "Trabalhando com rotas", duration: "6:21" },
      { name: "Exibindo detalhes de um post", duration: "13:40" },
      { name: "Tratamento quando não encontrar o post", duration: "3:52" },
      { name: "Carregando um post usando async", duration: "1:18" },
      { name: "Navegando entre páginas com tag helper", duration: "8:22" },
      { name: "Injetando códigos na Layout com Sections", duration: "10:54" },
      { name: "Realizando busca de posts", duration: "12:39" },
      { name: "Criando a entidade Comentário", duration: "3:10" },
      { name: "Mapeamento da classe Comentário no EF", duration: "4:32" },
      { name: "Carregando comentários de um determinado post", duration: "11:22" },
      { name: "Criando um formulário de comentário", duration: "3:22" },
      { name: "Validando o formulário de comentário", duration: "14:02" },
      { name: "Salvando um comentário de um determinado Post", duration: "4:50" }
    ]
  },
  {
    title: "Módulo 3 - Blog (Parte 2)",
    lessons: [
      { name: "Criando a entidade Categoria", duration: "5:21" },
      { name: "Mapeamento da classe Categoria no EF", duration: "9:29" },
      { name: "Criando um widget (componente) para listar as categorias", duration: "16:16" },
      { name: "Filtrando Posts por Categoria", duration: "7:46" },
      { name: "Carregando a categoria nos posts", duration: "14:21" },
      { name: "Criando um formulário de contato", duration: "8:33" },
      { name: "Validando o formulário de contato", duration: "8:00" },
      { name: "Recaptcha Google - Protegendo contra spam", duration: "16:01" },
      { name: "Enviando e-mail (SendGrid)", duration: "15:32" }
    ]
  },
  {
    title: "Módulo 4 - Autenticação",
    lessons: [
      { name: "Criando as tabelas de Usuário", duration: "9:35" },
      { name: "Criando a página de Login", duration: "9:01" },
      { name: "Implementando autenticação via Cookie", duration: "14:11" },
      { name: "Criando a página de registro de usuário", duration: "8:21" },
      { name: "Implementando o cadastro do usuário", duration: "11:31" },
      { name: "Criando a página 'Minha Conta'", duration: "13:37" },
      { name: "Implementando Logout", duration: "3:00" },
      { name: "Criando a página 'Alterar Senha'", duration: "10:39" }
    ]
  },
  {
    title: "Módulo 5 - Área Administrativa",
    lessons: [
      { name: "Criando a tela de cadastro de posts", duration: "18:01" },
      { name: "Realizando upload de imagens no Azure", duration: "17:56" },
      { name: "Publicando um post", duration: "6:48" },
      { name: "Criando a tela de listagem de posts", duration: "8:59" },
      { name: "Criando a tela de edição de post", duration: "12:51" },
      { name: "Criando o serviço de Post", duration: "10:20" },
      { name: "Excluindo um post", duration: "4:29" },
      { name: "Gerenciamento de categorias", duration: "18:34" },
      { name: "Gerenciamento de comentários", duration: "8:59" }
    ]
  },
  {
    title: "Módulo 6 - Melhorias e otimizações",
    lessons: [
      { name: "Introdução ao Módulo 6 - Melhorias e otimizações", duration: "2:30" },
      { name: "Instalando o Mini Profiler", duration: "8:45" },
      { name: "Criando uma página de erro customizada", duration: "6:12" },
      { name: "Paginação de posts", duration: "12:34" },
      { name: "Carregando comentários com Ajax", duration: "9:18" },
      { name: "Paginação de comentários", duration: "7:22" },
      { name: "Trabalhando com cache de aplicação (MemoryCache)", duration: "11:05" },
      { name: "Trabalhando com cache de saída (Outputcache)", duration: "8:47" },
      { name: "Trabalhando com cache de conteúdo (Arquivos)", duration: "10:33" },
      { name: "Trabalhando com editor HTML", duration: "14:21" },
      { name: "Configurando um armazenamento local", duration: "6:55" },
      { name: "Upload e exibição de imagens usando o Azure Blob Storage", duration: "15:42" },
      { name: "Criando uma conta de armazenamento no Azure", duration: "5:18" },
      { name: "Carregando lista de posts com Ajax", duration: "11:27" },
      { name: "Autocomplete de categoria ao cadastrar/editar um post", duration: "9:44" },
      { name: "Informar Tags ao cadastrar/editar um post", duration: "8:36" },
      { name: "Minificação de arquivos", duration: "5:52" },
      { name: "Otimização de imagens", duration: "7:15" }
    ]
  },
  {
    title: "Módulo 7 - Indo para Produção",
    lessons: [
      { name: "Introdução ao Módulo 7 - Indo para Produção", duration: "2:15" },
      { name: "Registrando um domínio .com.br", duration: "6:33" },
      { name: "Contratando um DNS (CloudFlare)", duration: "8:12" },
      { name: "Configurando o apontamento DNS", duration: "5:47" },
      { name: "Configurando certificado digital", duration: "7:28" },
      { name: "Configurando domínio no Mailgun", duration: "9:15" },
      { name: "Criando uma conta no Search Console", duration: "4:42" },
      { name: "Configurando o Search Console", duration: "6:18" },
      { name: "Criando uma conta no Google Analytics", duration: "5:55" },
      { name: "Instalando Google Analytics", duration: "7:33" },
      { name: "Medindo desempenho (Lighthouse, Gmetrix, etc)", duration: "12:08" }
    ]
  },
  {
    title: "Módulo 8 - Desafios",
    lessons: [
      { name: "Introdução ao Módulo 8 - Desafios", duration: "3:10" },
      { name: "Moderação de comentários", duration: "10:45" },
      { name: "Integração com Disqus", duration: "8:22" },
      { name: "Utilizar templates para envio de email", duration: "12:15" },
      { name: "Redirecionamento automático quando muda o permalink de um post", duration: "9:38" },
      { name: "Cadastro de Newsletter", duration: "11:52" },
      { name: "Integração com Redes Sociais (Compartilhamento)", duration: "8:17" },
      { name: "Publicar/despublicar um post", duration: "6:44" },
      { name: "Gestão de usuários do painel administrativo com perfis de acesso", duration: "15:33" },
      { name: "Feed RSS", duration: "7:28" },
      { name: "Imagem de capa nos posts", duration: "9:12" },
      { name: "Paginação numérica dos posts", duration: "8:55" }
    ]
  }
];

export const Curriculum = () => {
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  
  return (
    <section id="curriculum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Conteúdo Completo do Curso
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {totalLessons} aulas práticas organizadas em 8 módulos
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto p-6" style={{ boxShadow: 'var(--card-shadow)' }}>
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module, index) => (
              <AccordionItem key={index} value={`module-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                      {index === 0 ? "I" : index}
                    </div>
                    <span className="font-semibold text-lg">{module.title}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({module.lessons.length} aulas)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-4 pl-11">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lessonIndex}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <PlayCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm">{lesson.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span className="text-sm">{lesson.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};
