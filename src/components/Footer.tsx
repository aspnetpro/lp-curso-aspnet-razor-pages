export const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Curso Razor Pages. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Aprenda a criar aplicações web profissionais com ASP.NET
          </p>
        </div>
      </div>
    </footer>
  );
};
