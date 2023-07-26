import { send } from '@emailjs/browser'
import { toast } from 'react-toastify';

export function sendMail(data) {
  const mail = toast.loading("Enviando...")
  if (data.name && data.url && data.email) {
    send("service_10ngqov", "template_yyeatlr" , {
      name: data.name,
      email: data.email,
      link: data.url,
    }, "5N3oBIgq_8exnoMgP")
      .then(function() {
        toast.update(mail, { render: "Sugestão enviada!", type: "success", isLoading: false, autoClose: 5000 });
      }, function() {
        toast.update(mail, { render: "Erro!", type: "error", isLoading: false, autoClose: 5000 });
      });
    return
  }
  toast.update(mail, { render: "Preencha todos os campos!", type: "warning", isLoading: false, autoClose: 5000 });
}
