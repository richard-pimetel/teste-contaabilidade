import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Building2, Clock, Award, Users, Briefcase, ShieldCheck, LineChart, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Aqui você pode alterar as informações de contato
  const contato = {
    telefone: "+55 11 98542-0174",
    email: "comercial.datha@gmail.com",
    endereco: "Rua Antônio Zamela 43 sala 113, Centro Carapicuíba , CEP: 06320-050"
  };

  const servicos = [
    {
      titulo: "Abertura de Empresa",
      descricao: "Assessoria completa na abertura da sua empresa, incluindo escolha do regime tributário ideal, registro nos órgãos competentes e toda documentação necessária.",
      icon: Briefcase
    },
    {
      titulo: "Contabilidade Mensal",
      descricao: "Escrituração contábil completa, balancetes mensais, demonstrações financeiras e relatórios gerenciais para tomada de decisão.",
      icon: LineChart
    },
    {
      titulo: "Folha de Pagamento",
      descricao: "Gestão completa da folha de pagamento, incluindo admissões, demissões, férias, 13º salário e cumprimento das obrigações trabalhistas.",
      icon: Users
    },
    {
      titulo: "Declaração de Imposto de Renda",
      descricao: "Elaboração e transmissão de todas as declarações fiscais obrigatórias, garantindo conformidade com a legislação.",
      icon: ShieldCheck
    },
    {
      titulo: "Planejamento Tributário",
      descricao: "Análise e implementação das melhores estratégias para redução legal da carga tributária da sua empresa.",
      icon: Award
    },
    {
      titulo: "Consultoria Financeira",
      descricao: "Orientação especializada para otimização de recursos, análise de investimentos e gestão financeira eficiente.",
      icon: Clock
    }
  ];

  const diferenciais = [
    {
      titulo: "Experiência Comprovada",
      descricao: "Anos de experiência atendendo empresas de diversos segmentos",
      icon: Award
    },
    {
      titulo: "Atendimento Personalizado",
      descricao: "Suporte dedicado e atendimento individualizado para cada cliente",
      icon: Users
    },
    {
      titulo: "Tecnologia Avançada",
      descricao: "Utilizamos sistemas modernos para garantir eficiência e segurança",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 size={32} />
              <h1 className="text-xl md:text-2xl font-bold">Contabilidade Profissional</h1>
            </div>
            {/* Menu para Desktop */}
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li><a href="#servicos" className="hover:text-blue-200 transition">Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-blue-200 transition">Diferenciais</a></li>
                <li><a href="#contato" className="hover:text-blue-200 transition">Contato</a></li>
              </ul>
            </nav>
            {/* Botão do Menu Mobile */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a 
                    href="#servicos" 
                    className="block py-2 hover:text-blue-200 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#diferenciais" 
                    className="block py-2 hover:text-blue-200 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="block py-2 hover:text-blue-200 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Excelência em Contabilidade Empresarial</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Oferecemos soluções contábeis completas e personalizadas para impulsionar o sucesso do seu negócio. 
            Nossa equipe de profissionais qualificados está pronta para atender todas as suas necessidades contábeis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${contato.telefone.replace(/\D/g, '')}`}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Fale Conosco pelo WhatsApp
            </a>
            <a 
              href="#servicos"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-center"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4">
            Oferecemos uma gama completa de serviços contábeis para atender às necessidades específicas 
            do seu negócio, garantindo conformidade e eficiência.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition">
                <servico.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">{servico.titulo}</h3>
                <p className="text-gray-600">{servico.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Diferenciais</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4">
            Conheça os motivos que fazem nossa contabilidade ser referência no mercado
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
                <diferencial.icon className="text-blue-600 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-3">{diferencial.titulo}</h3>
                <p className="text-gray-600">{diferencial.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4">
            Estamos prontos para atender sua empresa e oferecer as melhores soluções contábeis
          </p>
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white w-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-600">{contato.telefone}</p>
                  <p className="text-sm text-gray-500">Disponível em horário comercial</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white w-fit">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">{contato.email}</p>
                  <p className="text-sm text-gray-500">Respondemos em até 24 horas</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white w-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600">{contato.endereco}</p>
                  <p className="text-sm text-gray-500">Atendimento presencial com agendamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Somos especialistas em contabilidade empresarial, 
                comprometidos com a excelência e satisfação dos nossos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <p className="text-gray-400">
                Segunda a Sexta: 9h às 18h<br />
                
              </p>
            </div>
            
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Contabilidade Profissional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;