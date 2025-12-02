<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <p>Bonjour {{ $user->name }},</p>

    <p>Merci pour votre achat. Votre ticket <strong>#{{ $ticket->id }}</strong> a bien été généré.</p>

    <p>Le PDF du ticket est attaché à ce message. Présentez le PDF ou son QR code à l'entrée de l'événement.</p>

    <p>Bonne participation,</p>
    <p>— L'équipe</p>

    <hr>
    <small>Si vous n'avez pas effectué cet achat, contactez-nous immédiatement.</small>
</body>
</html>

