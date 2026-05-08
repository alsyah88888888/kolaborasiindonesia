/**
 * KOBOI AI Assistant - Smart Agent Logic
 * PT. Kola Borasi Indonesia
 */

const KOBOI_AI = {
    config: {
        name: "Kobi",
        role: "Asisten AI KOBOI",
        welcomeMessage: "Halo! Saya Kobi, asisten AI PT. Kola Borasi Indonesia. Ada yang bisa saya bantu hari ini?",
        avatar: "logokoboi.png",
        geminiApiKey: "AIzaSyDeqfGxS9M1syHdxf50vEpOnTJLZs6Rt1s", // Updated with provided key
    },

    knowledge: {
        company: "PT. Kola Borasi Indonesia (KOBOI) adalah mitra distribusi FMCG terkemuka di Indonesia, didirikan tahun 2020. Kami memiliki 800+ jaringan toko ritel dan sistem logistik mandiri.",
        vision: "Menjadi pusat distribusi FMCG terkemuka di Indonesia yang mendefinisikan ulang keterjangkauan dan kualitas.",
        mission: "Efisiensi rantai pasok, keunggulan harga, inovasi produk, dan kemitraan terpercaya.",
        contact: "Lokasi: Green Kartika Residence, Cibinong, Bogor. WhatsApp: +62 857-7444-4805. Website: kolaborasiindonesia.com",
        shipping: "Kami menjamin pengiriman cepat dalam waktu 24 jam setelah pemesanan melalui armada Borcelle Logistics.",
        fleet: "Armada kami meliputi: Double Bak, Double Box, Mobil Box Engkel, Mobil Pick Up, dan Mobil Box."
    },

    init() {
        this.renderUI();
        this.addEventListeners();
        this.showWelcome();
    },

    renderUI() {
        const html = `
            <div class="ai-agent-launcher" id="aiLauncher">
                <i class="fas fa-robot"></i>
                <div class="badge">AI</div>
            </div>
            <div class="ai-agent-container" id="aiContainer">
                <div class="ai-agent-header">
                    <div class="avatar">
                        <img src="${this.config.avatar}" alt="Kobi">
                    </div>
                    <div class="info">
                        <h3>${this.config.name}</h3>
                        <p>${this.config.role}</p>
                    </div>
                    <div class="close-btn" id="aiClose">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="ai-agent-messages" id="aiMessages"></div>
                <div class="ai-agent-input">
                    <input type="text" id="aiInput" placeholder="Tanya sesuatu tentang KOBOI...">
                    <button id="aiSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    },

    addEventListeners() {
        const launcher = document.getElementById('aiLauncher');
        const container = document.getElementById('aiContainer');
        const closeBtn = document.getElementById('aiClose');
        const sendBtn = document.getElementById('aiSend');
        const input = document.getElementById('aiInput');

        launcher.onclick = () => container.classList.toggle('active');
        closeBtn.onclick = () => container.classList.remove('active');

        sendBtn.onclick = () => this.handleUserMessage();
        input.onkeypress = (e) => { if (e.key === 'Enter') this.handleUserMessage(); };
    },

    showWelcome() {
        this.addMessage(this.config.welcomeMessage, 'bot');
        this.showQuickReplies(['Cek Produk', 'Lokasi & Kontak', 'Cara Order']);
    },

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('aiMessages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerText = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    showTyping() {
        const messagesContainer = document.getElementById('aiMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'aiTyping';
        typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    },

    showQuickReplies(replies) {
        const messagesContainer = document.getElementById('aiMessages');
        const repliesDiv = document.createElement('div');
        repliesDiv.className = 'quick-replies';
        replies.forEach(reply => {
            const btn = document.createElement('div');
            btn.className = 'quick-reply';
            btn.innerText = reply;
            btn.onclick = () => {
                document.getElementById('aiInput').value = reply;
                this.handleUserMessage();
            };
            repliesDiv.appendChild(btn);
        });
        messagesContainer.appendChild(repliesDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    async handleUserMessage() {
        const input = document.getElementById('aiInput');
        const text = input.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        input.value = '';

        const typing = this.showTyping();

        // Actual AI call if API Key is present
        try {
            const response = await this.generateResponse(text);
            typing.remove();
            this.addMessage(response, 'bot');
        } catch (error) {
            typing.remove();
            this.addMessage("Maaf, sedang ada gangguan koneksi ke otak AI saya. Bisa coba lagi nanti?", 'bot');
            console.error("Gemini Error:", error);
        }
    },

    async generateResponse(query) {
        const q = query.toLowerCase();

        // 1. Check Catalog First (Fastest & Most Accurate for products)
        if (typeof ecommerceProducts !== 'undefined' && (q.includes('produk') || q.includes('barang') || q.includes('jual') || q.includes('ada'))) {
            const searchTerms = q.replace(/produk|barang|jual|cari|ada|mau|tanya|apa/g, '').trim();
            if (searchTerms.length > 2) {
                const found = ecommerceProducts.filter(p => p.name.toLowerCase().includes(searchTerms)).slice(0, 3);
                if (found.length > 0) {
                    let resp = `Saya menemukan beberapa produk "${searchTerms}" di KOBOI:\n`;
                    found.forEach(p => resp += `- ${p.name}\n`);
                    resp += `\nSilakan cek Katalog untuk detail lengkapnya.`;
                    return resp;
                }
            }
        }

        // 2. Company Info (Prioritize local knowledge for speed and stability)
        if (q.includes('siapa') || q.includes('apa itu') || q.includes('koboi')) return this.knowledge.company;
        if (q.includes('visi') || q.includes('misi')) return `${this.knowledge.vision}\n\nMisi kami: ${this.knowledge.mission}`;
        if (q.includes('kontak') || q.includes('wa') || q.includes('lokasi') || q.includes('alamat')) return this.knowledge.contact;
        if (q.includes('kirim') || q.includes('ongkir') || q.includes('pengiriman')) return this.knowledge.shipping;
        if (q.includes('order') || q.includes('pesan') || q.includes('cara')) return "Cara order sangat mudah! Anda bisa langsung hubungi WhatsApp kami di +62 857-7444-4805 atau melalui Sales Representative kami yang tersebar di 800+ toko mitra.";

        // 3. Use Gemini for everything else
        if (this.config.geminiApiKey) {
            try {
                return await this.callGemini(query);
            } catch (err) {
                console.error("Gemini fallback error:", err);
                return "Maaf, saya sedang sulit berkoneksi dengan pusat data. Bisa tanyakan tentang produk atau kontak kami saja?";
            }
        }
        
        return "Maaf, saya belum mengerti pertanyaan itu. Anda bisa menanyakan tentang produk, lokasi, atau cara bermitra dengan KOBOI.";
    },

    async callGemini(prompt) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.config.geminiApiKey}`;
        
        const systemPrompt = `Anda adalah Kobi, asisten AI untuk PT. Kola Borasi Indonesia (KOBOI). 
        Info Perusahaan: ${this.knowledge.company}
        Visi: ${this.knowledge.vision}
        Misi: ${this.knowledge.mission}
        Kontak: ${this.knowledge.contact}
        Pengiriman: ${this.knowledge.shipping}
        
        Tugas Anda: Jawab pertanyaan pelanggan dengan ramah, profesional, dan informatif dalam Bahasa Indonesia. 
        Jawablah dengan singkat dan padat. Jika tidak tahu, sarankan hubungi WhatsApp.`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${systemPrompt}\n\nPertanyaan User: ${prompt}` }]
                }]
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || "Gemini API Error");
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Invalid response from Gemini");
        }
    }
};

// Initialize when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => KOBOI_AI.init());
} else {
    KOBOI_AI.init();
}
