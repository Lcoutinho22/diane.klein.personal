        function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            if(body.classList.contains('light-theme')){ 
                icon.classList.replace('fa-sun', 'fa-moon'); 
                localStorage.setItem('theme-dk', 'light'); 
            } else { 
                icon.classList.replace('fa-moon', 'fa-sun'); 
                localStorage.setItem('theme-dk', 'dark'); 
            }
        }
        if(localStorage.getItem('theme-dk') === 'light') { 
            document.body.classList.add('light-theme'); 
            document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon'); 
        }

        function enviarAnamnese() {
            const plano = document.getElementById('planSelect').value;
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const nivel = document.getElementById('levelSelect').value;
            const objetivo = document.getElementById('goalInput').value;
            
            if(!nome || !idade || !objetivo) { alert(translations[localStorage.getItem('lang-dk') || 'pt'].alert_fill || "Por favor, preencha Nome, Idade e Objetivo."); return; }
            
            const mensagem = `Olá Diane Klein! Preenchi a aplicação:%0A%0A*--- DADOS ---*%0A*Nome:* ${nome}%0A*Idade:* ${idade} anos%0A*Nível:* ${nivel}%0A*Interesse:* ${plano}%0A%0A*--- OBJETIVO ---*%0A${objetivo}%0A%0AAguardo análise!`;
            
            window.open(`https://wa.me/555599373985?text=${mensagem}`, '_blank');
        }

        function escolherPlano(plano) {
            const mensagem = `Olá Diane Klein! Me interessei pelo serviço: *${plano}*. Poderia me passar mais detalhes?`;
            window.open(`https://wa.me/555599373985?text=${mensagem}`, '_blank');
        }

        /* JavaScript para o FAQ - Acordeão */
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const toggle = item.querySelector('.faq-toggle');
            toggle.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        });

        /* --- SCROLL ANIMATION --- */
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        /* --- LANGUAGE SWITCHER --- */
        const translations = {
            pt: {
                subtitle: "Personal Trainer",
                bio: "Metodologia exclusiva focada em esculpir seu corpo com força e excelência.",
                btn_talk: "Falar Agora",
                btn_services: "Ver Serviços",
                about_title: "Sobre a Treinadora",
                about_subtitle: "Equilibrando corpo e mente através do movimento!",
                about_p1: "Sou <span class='about-highlight'>Diane Klein</span>, Personal Trainer com bacharel em educação física. Minha missão é desenvolver físico funcional, forte e consequentemente mais estético, através de um trabalho estratégico, individualizado e baseado em constância.",
                about_p2: "Desenvolvo o trabalho com base em três pilares fundamentais: <span class='about-highlight'>respiração, postura e qualidade na execução do exercício</span>. Desse modo, procuro restabelecer a qualidade de vida, equilibrando corpo e mente.",
                stat_custom: "Personalizado",
                stat_perf: "Alta Performance",
                method_title: "Metodologia",
                method_p1: "As aulas são montadas e desenvolvidas conforme as necessidades, considerando algumas particularidades do aluno, como lesão, restrição de movimento ou um objetivo específico, como perda de peso, ganho de massa muscular, entre outros.",
                method_p2: "Inicialmente é realizada uma avaliação para identificar eventual fraqueza ou déficit muscular. A partir daí procura-se trabalhar no fortalecimento dessa musculatura para depois dar início ao treinamento em si.",
                method_p3: "O avanço no programa de treinamento é consequência da evolução de cada aluno, sempre em sincronia com os pilares que são a base do trabalho.",
                plans_title: "Planos e Serviços",
                plan1_title: "Consultoria on-line",
                plan1_badge: "Acompanhamento",
                plan1_f1: "Treino 100% Personalizado",
                plan1_f2: "Acompanhamento Contínuo",
                plan1_f3: "Suporte Direto WhatsApp",
                plan2_title: "Montagem de Treino",
                plan2_badge: "Treino Estratégico",
                plan2_f1: "Planilha Estruturada",
                plan2_f2: "Foco no seu Objetivo",
                plan2_f3: "Ideal para quem já treina",
                plan3_tag: "Presencial",
                plan3_title: "Atendimento Presencial",
                plan3_badge: "Treino 1 a 1",
                plan3_f1: "Bairros: Menino Deus, Cidade Baixa e Azenha",
                plan3_f2: "Outros bairros: valores a combinar",
                plan3_f3: "Correção ao vivo e motivação",
                plan4_title: "Avaliação Física",
                plan4_badge: "Análise Corporal",
                plan4_f1: "Análise de Composição Corporal",
                plan4_f2: "Identificação de Déficits",
                plan4_f3: "Direcionamento de Metas",
                price_monthly: "Valor Mensal",
                price_plan: "Por Planilha",
                price_hour: "A hora aula",
                price_eval: "Por Avaliação",
                btn_want: "Quero Esse",
                btn_consult: "Consultar Vagas",
                bbf_title: "Transforme seu corpo com o <span style='color: var(--accent-color); font-weight: 800;'>BBF</span>",
                bbf_sub: "( Básico Bem Feito )",
                faq_title: "Perguntas Frequentes",
                faq1_q: "Como funciona a consultoria on-line?",
                faq1_a: "Após a confirmação do pagamento, você responderá a um questionário detalhado sobre sua rotina, objetivos e histórico. Com essas informações, montarei um planejamento 100% personalizado para você acessar via aplicativo.",
                faq2_q: "Em quanto tempo começo a ver resultados?",
                faq2_a: "Os primeiros resultados na disposição e energia costumam aparecer nas primeiras semanas. Resultados estéticos visíveis e consolidados geralmente são notados entre 4 a 8 semanas, dependendo da sua adesão ao plano.",
                faq3_q: "Posso treinar em casa ou só na academia?",
                faq3_a: "O treino é totalmente adaptado ao ambiente que você tem disponível. Se você treina em casa (com ou sem equipamentos) ou em uma academia completa, o planejamento será feito especificamente para essa realidade.",
                faq4_q: "Como funciona o suporte para dúvidas?",
                faq4_a: "Você terá acesso direto ao meu WhatsApp para tirar dúvidas sobre a execução dos exercícios, alinhar a rotina ou pedir ajustes no treino. Estou aqui para garantir que você não se sinta perdido em nenhum momento.",
                form_title: "Aplicação para Consultoria",
                lbl_plan: "Plano ou Serviço de Interesse",
                opt_default: "Ainda não sei / Quero recomendação",
                lbl_name: "Seu Nome",
                placeholder_name: "Seu nome completo",
                lbl_age: "Idade",
                placeholder_age: "Ex: 30",
                lbl_level: "Nível Atual",
                opt_l1: "Iniciante",
                opt_l2: "Intermediário",
                opt_l3: "Avançado",
                lbl_goal: "Qual seu principal objetivo?",
                placeholder_goal: "Ex: Quero emagrecer e ganhar massa...",
                btn_submit: "Enviar Avaliação",
                cta_title: "Comece Sua Transformação",
                cta_sub: "Agende sua avaliação e dê o primeiro passo hoje.",
                cta_btn: "Falar com a Treinadora",
                footer_txt: "Personal Trainer.",
                copy_link: "Link copiado para a área de transferência!",
                alert_fill: "Por favor, preencha Nome, Idade e Objetivo."
            },
            en: {
                subtitle: "Personal Trainer",
                bio: "Exclusive methodology focused on sculpting your body with strength and excellence.",
                btn_talk: "Talk Now",
                btn_services: "See Services",
                about_title: "About the Trainer",
                about_subtitle: "Balancing body and mind through movement!",
                about_p1: "I am <span class='about-highlight'>Diane Klein</span>, Personal Trainer with a bachelor's degree in physical education. My mission is to develop a functional, strong, and consequently more aesthetic physique through strategic, individualized work based on consistency.",
                about_p2: "I base my work on three fundamental pillars: <span class='about-highlight'>breathing, posture, and quality of exercise execution</span>. In this way, I seek to restore quality of life, balancing body and mind.",
                stat_custom: "Customized",
                stat_perf: "High Performance",
                method_title: "Methodology",
                method_p1: "Classes are designed according to needs, considering student particularities like injuries, movement restrictions, or specific goals such as weight loss or muscle gain.",
                method_p2: "Initially, an assessment is carried out to identify any weakness or muscle deficit. From there, we work on strengthening those muscles before starting the actual training.",
                method_p3: "Progress in the training program is a consequence of each student's evolution, always in sync with the core pillars of our work.",
                plans_title: "Plans and Services",
                plan1_title: "Online Consultation",
                plan1_badge: "Follow-up",
                plan1_f1: "100% Customized Training",
                plan1_f2: "Continuous Monitoring",
                plan1_f3: "Direct WhatsApp Support",
                plan2_title: "Training Plan",
                plan2_badge: "Strategic Training",
                plan2_f1: "Structured Spreadsheet",
                plan2_f2: "Focus on your Goal",
                plan2_f3: "Ideal for those who already train",
                plan3_tag: "In-Person",
                plan3_title: "In-Person Training",
                plan3_badge: "1-on-1 Training",
                plan3_f1: "Neighborhoods: Menino Deus, Cidade Baixa and Azenha",
                plan3_f2: "Other areas: prices to match",
                plan3_f3: "Live correction and motivation",
                plan4_title: "Physical Evaluation",
                plan4_badge: "Body Analysis",
                plan4_f1: "Body Composition Analysis",
                plan4_f2: "Deficit Identification",
                plan4_f3: "Goal Setting",
                price_monthly: "Monthly Fee",
                price_plan: "Per Spreadsheet",
                price_hour: "Per Hour",
                price_eval: "Per Evaluation",
                btn_want: "I Want This",
                btn_consult: "Check Availability",
                bbf_title: "Transform your body with <span style='color: var(--accent-color); font-weight: 800;'>BBF</span>",
                bbf_sub: "( Basics Done Right )",
                faq_title: "Frequently Asked Questions",
                faq1_q: "How does the online consultation work?",
                faq1_a: "After payment confirmation, you will answer a detailed questionnaire about your routine, goals, and history. With this information, I will create a 100% personalized plan for you to access via the app.",
                faq2_q: "How soon do I start seeing results?",
                faq2_a: "The first results in energy and disposition usually appear in the first weeks. Visible aesthetic results are usually noted between 4 to 8 weeks, depending on your adherence to the plan.",
                faq3_q: "Can I train at home or only at the gym?",
                faq3_a: "The training is completely adapted to the environment you have available. Whether you train at home (with or without equipment) or in an equipped gym.",
                faq4_q: "How does support work?",
                faq4_a: "You will have direct access to my WhatsApp to ask questions about exercise execution or request training adjustments. I'm here to ensure you never feel lost.",
                form_title: "Consultation Application",
                lbl_plan: "Plan or Service of Interest",
                opt_default: "I don't know yet / I want a recommendation",
                lbl_name: "Your Name",
                placeholder_name: "Your full name",
                lbl_age: "Age",
                placeholder_age: "Ex: 30",
                lbl_level: "Current Level",
                opt_l1: "Beginner",
                opt_l2: "Intermediate",
                opt_l3: "Advanced",
                lbl_goal: "What is your main goal?",
                placeholder_goal: "Ex: I want to lose weight and gain muscle...",
                btn_submit: "Submit Assessment",
                cta_title: "Start Your Transformation",
                cta_sub: "Schedule your assessment and take the first step today.",
                cta_btn: "Talk to the Trainer",
                footer_txt: "Personal Trainer.",
                copy_link: "Link copied to clipboard!",
                alert_fill: "Please fill in Name, Age, and Goal."
            },
            es: {
                subtitle: "Entrenador Personal",
                bio: "Metodología exclusiva enfocada en esculpir tu cuerpo con fuerza y excelencia.",
                btn_talk: "Hablar Ahora",
                btn_services: "Ver Servicios",
                about_title: "Sobre la Entrenadora",
                about_subtitle: "¡Equilibrando cuerpo y mente a través del movimiento!",
                about_p1: "Soy <span class='about-highlight'>Diane Klein</span>, Entrenadora Personal con licenciatura en educación física. Mi misión es desarrollar un físico funcional, fuerte y, en consecuencia, más estético a través de un trabajo estratégico, individualizado y basado en la constancia.",
                about_p2: "Baso mi trabajo en tres pilares fundamentales: <span class='about-highlight'>respiración, postura y calidad de ejecución del ejercicio</span>. De esta manera, busco restaurar la calidad de vida, equilibrando cuerpo y mente.",
                stat_custom: "Personalizado",
                stat_perf: "Alto Rendimiento",
                method_title: "Metodología",
                method_p1: "Las clases se diseñan según las necesidades, considerando las particularidades del alumno, como lesiones o un objetivo específico de pérdida de peso o musculatura.",
                method_p2: "Inicialmente, se realiza una evaluación para identificar debilidades o déficits musculares. A partir de ahí trabajamos en fortalecer esa musculatura antes de iniciar el entrenamiento real.",
                method_p3: "El avance en el programa de entrenamiento es consecuencia de la evolución de cada alumno, siempre en sincronía con los pilares fundamentales del trabajo.",
                plans_title: "Planes y Servicios",
                plan1_title: "Consultoría Online",
                plan1_badge: "Acompañamiento",
                plan1_f1: "Entrenamiento 100% Personalizado",
                plan1_f2: "Monitoreo Continuo",
                plan1_f3: "Soporte Directo WhatsApp",
                plan2_title: "Plan de Entrenamiento",
                plan2_badge: "Entrenamiento Estratégico",
                plan2_f1: "Planilla Estructurada",
                plan2_f2: "Enfoque en tu Objetivo",
                plan2_f3: "Ideal para quienes ya entrenan",
                plan3_tag: "Presencial",
                plan3_title: "Atención Presencial",
                plan3_badge: "Entrenamiento 1 a 1",
                plan3_f1: "Barrios: Menino Deus, Cidade Baixa y Azenha",
                plan3_f2: "Otras áreas: precios a negociar",
                plan3_f3: "Corrección en vivo y motivación",
                plan4_title: "Evaluación Física",
                plan4_badge: "Análisis Corporal",
                plan4_f1: "Análisis de Composición Corporal",
                plan4_f2: "Identificación de Déficits",
                plan4_f3: "Establecimiento de Metas",
                price_monthly: "Valor Mensual",
                price_plan: "Por Planilla",
                price_hour: "Por Hora",
                price_eval: "Por Evaluación",
                btn_want: "Quiero Este",
                btn_consult: "Consultar Cupos",
                bbf_title: "Transforma tu cuerpo con el <span style='color: var(--accent-color); font-weight: 800;'>BBF</span>",
                bbf_sub: "( Básico Bien Hecho )",
                faq_title: "Preguntas Frecuentes",
                faq1_q: "¿Cómo funciona la consultoría online?",
                faq1_a: "Tras confirmar el pago, responderás a un cuestionario detallado sobre tu rutina, metas e historial. Con esta información, crearé un plan 100% personalizado para que accedas vía aplicación.",
                faq2_q: "¿En cuánto tiempo veo resultados?",
                faq2_a: "Los primeros resultados de energía suelen aparecer pronto. Los resultados estéticos visibles se notan generalmente entre 4 a 8 semanas, dependiendo de tu adherencia al plan.",
                faq3_q: "¿Puedo entrenar en casa o solo gimnasio?",
                faq3_a: "El entrenamiento se adapta por completo al entorno disponible. Si entrenas en casa (con o sin equipo) o en un gimnasio completo, el plan se hace para esa realidad.",
                faq4_q: "¿Cómo funciona el soporte?",
                faq4_a: "Tendrás acceso directo a mi WhatsApp para aclarar dudas sobre la ejecución de los ejercicios o pedir ajustes en el plan. Estoy aquí para asegurarme de que nunca te sientas perdido.",
                form_title: "Aplicación de Consultoría",
                lbl_plan: "Plan o Servicio de Interés",
                opt_default: "Todavía no lo sé / Quiero una recomendación",
                lbl_name: "Tu Nombre",
                placeholder_name: "Tu nombre completo",
                lbl_age: "Edad",
                placeholder_age: "Ej: 30",
                lbl_level: "Nivel Actual",
                opt_l1: "Principiante",
                opt_l2: "Intermedio",
                opt_l3: "Avanzado",
                lbl_goal: "¿Cuál es tu principal objetivo?",
                placeholder_goal: "Ej: Quiero perder peso y ganar músculo...",
                btn_submit: "Enviar Evaluación",
                cta_title: "Comienza Tu Transformación",
                cta_sub: "Programa tu evaluación y da el primer paso hoy.",
                cta_btn: "Hablar con la Entrenadora",
                footer_txt: "Entrenadora Personal.",
                copy_link: "¡Enlace copiado al portapapeles!",
                alert_fill: "Por favor, completa Nombre, Edad y Objetivo."
            }
        };

        function changeLanguage(lang) {
            // Update buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
            
            // Update texts
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang] && translations[lang][key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translations[lang][key];
                    } else {
                        el.innerHTML = translations[lang][key];
                    }
                }
            });

            // Handle standard select options translation manually if needed, or if options have data-i18n tags, it automatically works since options use innerHTML
            
            localStorage.setItem('lang-dk', lang);
        }

        // Initialize language
        const savedLang = localStorage.getItem('lang-dk') || 'pt';
        changeLanguage(savedLang);

        /* --- SHARE MENU --- */
        function toggleShareMenu() {
            document.getElementById('shareDropdown').classList.toggle('show');
        }

        function shareTo(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Confira o Hub da Diane Klein: ");
            let shareUrl = "";

            switch(platform) {
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${text}${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'tiktok':
                case 'youtube':
                    // TikTok e YouTube não possuem uma API direta de compartilhamento de URL por link.
                    // O comportamento ideal é copiar o link.
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert(translations[localStorage.getItem('lang-dk') || 'pt'].copy_link || "Link copiado para a área de transferência!");
                    });
                    return;
            }

            if(shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=500');
            }
        }