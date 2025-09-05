# CitizenShield - Base Mini App

**Know Your Rights. Stay Safe. Anytime, Anywhere.**

CitizenShield is a Base Mini App that empowers individuals with immediate access to their legal rights, de-escalation tactics, and discreet documentation tools for interactions with law enforcement.

## Features

### 🛡️ State-Specific Rights Guides
- Location-aware legal information
- Concise, mobile-optimized summaries
- Relevant laws and statutes for your state

### 💬 De-escalation Scripts & Advice
- Pre-written phrases for common scenarios
- Multi-language support
- Strategic communication tools

### 🎙️ One-Tap Incident Recording
- Discreet audio/video recording
- Automatic location tagging
- Secure storage integration

### 📱 Automated Alert & Share
- Emergency contact notifications
- Incident summary generation
- Quick sharing capabilities

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: OnchainKit with MiniKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Storage**: IPFS via Pinata (optional)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Base wallet (for full functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd citizenshield-base-miniapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your API keys:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `OPENAI_API_KEY`: OpenAI API key for content generation (optional)
- `PINATA_API_KEY`: Pinata API key for IPFS storage (optional)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Basic Features (Free)
- Access state-specific rights information
- View basic de-escalation scripts
- Use location detection
- Connect Base wallet

### Premium Features (Micro-transactions)
- Extended recording storage
- Multi-language script translations
- Automated alert generation
- Advanced incident reporting

## Base Mini App Integration

CitizenShield is built as a Base Mini App with:

- **Primary Button**: Quick "Start Recording" action
- **Notifications**: Legal updates, recording confirmations, incident alerts
- **Frame Sharing**: Rights summaries and incident reports
- **Farcaster Integration**: Share rights cards and incident summaries

## Architecture

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main application page
├── providers.tsx      # MiniKit and OnchainKit providers
├── globals.css        # Global styles and design system
├── loading.tsx        # Loading UI
└── error.tsx          # Error boundary

components/
├── AppShell.tsx           # Main app layout and navigation
├── InfoCard.tsx           # Rights and script display cards
├── CallToAction.tsx       # Recording, alert, and share buttons
├── LanguageSelector.tsx   # Multi-language support
└── LocationAwareContent.tsx # State-specific content

lib/
├── types.ts           # TypeScript type definitions
├── constants.ts       # Sample data and constants
└── utils.ts          # Utility functions
```

## Design System

The app uses a custom design system with:

- **Colors**: Purple to pink gradient theme
- **Layout**: 12-column fluid grid, 24px gutters
- **Typography**: Inter font with semantic sizing
- **Components**: Glass morphism cards with consistent spacing
- **Motion**: Smooth transitions with cubic-bezier easing

## API Integration

CitizenShield integrates with:

- **OpenAI API**: Dynamic content generation and translations
- **Base RPC**: Blockchain interactions and transactions
- **Pinata**: Decentralized storage for recordings
- **Geolocation APIs**: Location-aware content delivery

## Security & Privacy

- **Local Storage**: Sensitive data stored locally when possible
- **Encrypted Communications**: All API calls use HTTPS
- **Minimal Data Collection**: Only essential information collected
- **User Control**: Users control all recordings and sharing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact:
- Email: support@citizenshield.app
- Discord: [CitizenShield Community](https://discord.gg/citizenshield)
- Documentation: [docs.citizenshield.app](https://docs.citizenshield.app)

## Disclaimer

CitizenShield is an educational and safety tool. It does not constitute legal advice. Always consult with qualified legal professionals for specific legal situations. The app is designed to help users understand their rights and document interactions, but cannot guarantee legal outcomes.

---

**Built with ❤️ for citizen safety and empowerment on Base**
