<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Billet - {{ $ticket->event->title }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f5f5f5;
        }
        .ticket {
            background: white;
            border: 2px solid #6EBAFB;
            border-radius: 15px;
            padding: 30px;
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            border-bottom: 2px dashed #6EBAFB;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #6EBAFB;
            font-size: 28px;
            margin-bottom: 10px;
        }
        .header .category {
            background: #6EBAFB;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
            font-size: 14px;
        }
        .info-section {
            margin: 20px 0;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .info-label {
            font-weight: bold;
            color: #333;
        }
        .info-value {
            color: #666;
        }
        .qr-section {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        .qr-section img {
            margin: 10px 0;
        }
        .qr-code-text {
            font-family: monospace;
            color: #666;
            font-size: 12px;
            margin-top: 10px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px dashed #6EBAFB;
            color: #999;
            font-size: 12px;
        }
        .price {
            font-size: 24px;
            font-weight: bold;
            color: #6EBAFB;
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="ticket">
        <div class="header">
            <h1>{{ $ticket->event->title }}</h1>
            <span class="category">{{ $ticket->event->category }}</span>
        </div>

        <div class="info-section">
            <div class="info-row">
                <span class="info-label">📅 Date de l'événement</span>
                <span class="info-value">{{ \Carbon\Carbon::parse($ticket->event->event_date)->format('d/m/Y à H:i') }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">📍 Lieu</span>
                <span class="info-value">{{ $ticket->event->location }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">👤 Titulaire</span>
                <span class="info-value">{{ $ticket->user->name }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">🎫 Numéro de billet</span>
                <span class="info-value">#{{ $ticket->id }}</span>
            </div>
        </div>

        <div class="price">
            {{ $ticket->event->price }} MAD
        </div>

        <div class="qr-section">
            <h3 style="margin-bottom: 10px;">Code QR du billet</h3>
            <p style="font-size: 12px; color: #666; margin-bottom: 15px;">
                Présentez ce code à l'entrée de l'événement
            </p>
            <img src="data:image/png;base64,{{ $qrCode }}" alt="QR Code">
            <div class="qr-code-text">
                {{ $ticket->qrcode }}
            </div>
        </div>

        <div class="footer">
            <p>Billet généré le {{ now()->format('d/m/Y à H:i') }}</p>
            <p>MyTiq - Votre plateforme de billetterie</p>
            <p style="margin-top: 10px; font-size: 10px;">
                Ce billet est nominatif et ne peut être ni échangé ni remboursé
            </p>
        </div>
    </div>
</body>
</html>