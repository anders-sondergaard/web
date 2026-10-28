// Copy of the CineGame journey animation on cinegame.html (initUserJourney), shown under "How to play".
// If the animation changes on cinegame.html, copy it here again.
// --- USER JOURNEY: CODE, JOIN, PLAY, WIN ---
// A 16-second loop in the style of the CineGame card: the game waits on the cinema screen with a
// 4-digit code in the corner, a guest types it into the CineGame app, the whole auditorium plays
// together, and the guest wins a prize that lands in the app. The step card for the part being shown lights up beside it.
(function initUserJourney() {
    const canvas = document.getElementById('ujCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const stepCards = [...document.querySelectorAll('#steps ol > li')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const PINK = '#f869b9';
    const FONT = '"General Sans", sans-serif';
    const CODE = '4719';
    const LOOP = 16;
    const S = { join: 3.5, play: 7.5, win: 12.5 }; // scene starts, in seconds; the code shows from 0
    const TYPED = [4.4, 4.9, 5.4, 5.9];             // when each digit is typed on the phone
    const JOINED = [1.0, 1.8, 6.4, 2.6, 3.2];       // when each guest's phone joins (seat order); "You" after typing the code
    const SEATS = [1, 3, 0, 2, 4];                  // which player each seat plays, "You" (0) in the middle

    let W = 0, H = 0;
    function resize() {
        const dpr = window.devicePixelRatio || 1;
        W = canvas.clientWidth;
        H = canvas.clientHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    new ResizeObserver(resize).observe(canvas);
    resize();

    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const ease = x => 1 - Math.pow(1 - clamp(x, 0, 1), 3);
    // 0 → 1 → 0 across [a, b], fading over f seconds at each end
    const span = (t, a, b, f = 0.4) => clamp(Math.min((t - a) / f, (b - t) / f), 0, 1);
    const font = (weight, px) => `${weight} ${Math.round(px)}px ${FONT}`;
    function glowText(text, x, y, px, color = '#ffffff', glow = PINK, weight = 900) {
        ctx.font = font(weight, px);
        ctx.shadowColor = glow;
        ctx.shadowBlur = px * 0.5;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;
    }

    // The cinema screen, high in the panel
    const scr = () => ({ x: W * 0.07, y: H * 0.07, w: W * 0.86, h: H * 0.36 });

    function drawScreen(t) {
        const s = scr();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1;
        ctx.strokeRect(s.x + 0.5, s.y + 0.5, s.w, s.h);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const cx = s.x + s.w / 2;

        // The game on the screen from the start: players wait on their spots until everyone has
        // joined (each appears when its guest joins), then chase the ball, and "You" scores
        let a = span(t, -1, S.win - 0.1);
        if (a > 0) {
            ctx.globalAlpha = a;
            const p = { x: s.x + s.w * 0.06, y: s.y + s.h * 0.12, w: s.w * 0.88, h: s.h * 0.76 };
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
            ctx.strokeRect(p.x + 0.5, p.y + 0.5, p.w, p.h);
            ctx.beginPath(); ctx.moveTo(p.x + p.w / 2, p.y); ctx.lineTo(p.x + p.w / 2, p.y + p.h); ctx.stroke();
            ctx.beginPath(); ctx.arc(p.x + p.w / 2, p.y + p.h / 2, p.h * 0.18, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = PINK;
            ctx.shadowColor = PINK;
            ctx.shadowBlur = 8;
            ctx.fillRect(p.x - 4, p.y + p.h * 0.34, 4, p.h * 0.32);
            ctx.fillRect(p.x + p.w, p.y + p.h * 0.34, 4, p.h * 0.32);
            ctx.shadowBlur = 0;
            // The ball wanders, then heads for the right-hand goal
            const g = Math.max(0, t - S.play), toGoal = ease((t - 10.2) / 0.8);
            const moving = ease((t - S.play) / 0.6); // from the spots into the game
            let bx = 0.5 + Math.sin(g * 1.7) * 0.28 * moving, by = 0.5 + Math.sin(g * 2.6) * 0.3 * moving;
            bx += (1.02 - bx) * toGoal;
            by += (0.5 - by) * toGoal;
            const players = [
                { name: 'YOU', pink: true, home: [0.3, 0.5], x: bx - 0.06, y: by + 0.04 },
                { name: 'PLAYER 2', home: [0.22, 0.25], x: 0.25 + Math.sin(g * 1.3) * 0.08, y: 0.25 + Math.sin(g) * 0.08 },
                { name: 'PLAYER 3', home: [0.7, 0.5], x: bx + 0.12, y: by - 0.1 + Math.sin(g * 2) * 0.05 },
                { name: 'PLAYER 4', home: [0.6, 0.24], x: 0.78 + Math.sin(g * 1.1) * 0.06, y: 0.25 + Math.sin(g * 1.6) * 0.1 },
                { name: 'PLAYER 5', pink: true, home: [0.78, 0.78], x: 0.8 + Math.sin(g * 0.9) * 0.05, y: 0.75 + Math.sin(g * 1.4) * 0.08 },
            ];
            const sq = Math.max(6, W * 0.03);
            ctx.textBaseline = 'bottom';
            players.forEach((pl, i) => {
                const shown = clamp((t - JOINED[SEATS.indexOf(i)]) / 0.3, 0, 1);
                if (shown <= 0) return;
                ctx.globalAlpha = a * shown;
                const px = pl.home[0] + (pl.x - pl.home[0]) * moving, py = pl.home[1] + (pl.y - pl.home[1]) * moving;
                const x = p.x + clamp(px, 0.03, 0.97) * p.w, y = p.y + clamp(py, 0.08, 0.95) * p.h;
                ctx.fillStyle = pl.pink ? PINK : 'rgba(255, 255, 255, 0.7)';
                if (pl.pink) { ctx.shadowColor = PINK; ctx.shadowBlur = 10; }
                ctx.fillRect(x - sq / 2, y - sq / 2, sq, sq);
                ctx.shadowBlur = 0;
                ctx.font = font(700, Math.max(7, W * 0.022));
                ctx.fillStyle = pl.pink ? PINK : 'rgba(255, 255, 255, 0.55)';
                ctx.fillText(pl.name, x, y - sq / 2 - 2);
            });
            ctx.globalAlpha = a;
            const b = Math.max(4, W * 0.018);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 8;
            ctx.fillRect(p.x + clamp(bx, 0, 1.02) * p.w - b / 2, p.y + by * p.h - b / 2, b, b);
            ctx.shadowBlur = 0;
            ctx.textBaseline = 'middle';
            const goal = span(t, 11, 12.4, 0.2);
            if (goal > 0) {
                ctx.globalAlpha = a * goal;
                glowText('GOAL!', cx, s.y + s.h / 2, W * 0.11);
            }
            ctx.globalAlpha = 1;
        }

        // The code, small in the top right corner of the screen: a thin frame like the pitch lines
        a = span(t, -1, S.play + 0.6);
        if (a > 0) {
            ctx.globalAlpha = a;
            const cw = s.w * 0.24, ch = s.h * 0.22, x0 = s.x + s.w - cw - s.w * 0.02, y0 = s.y + s.h * 0.05;
            ctx.fillStyle = '#141217';
            ctx.fillRect(x0, y0, cw, ch);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x0 + 0.5, y0 + 0.5, cw, ch);
            ctx.font = font(700, Math.max(6, W * 0.018));
            ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
            ctx.fillText('CODE', x0 + cw / 2, y0 + ch * 0.28);
            ctx.font = font(900, ch * 0.42);
            ctx.letterSpacing = `${ch * 0.06}px`;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(CODE, x0 + cw / 2 + ch * 0.03, y0 + ch * 0.66);
            ctx.letterSpacing = '0px';
            ctx.globalAlpha = 1;
        }

        // The result
        a = span(t, S.win, LOOP + 1);
        if (a > 0) {
            ctx.globalAlpha = a;
            glowText('YOU WIN!', cx, s.y + s.h * 0.45, W * 0.12);
            ctx.font = font(700, W * 0.03);
            ctx.fillStyle = PINK;
            ctx.fillText('YOUR PRIZE IS IN THE APP', cx, s.y + s.h * 0.75);
            // Sparks bursting from the middle of the screen
            const k = t - S.win;
            for (let i = 0; i < 28; i++) {
                const ang = i * 2.4, sp = 0.35 + (i % 5) * 0.12;
                const life = clamp(1 - k / 2.2, 0, 1);
                if (life <= 0) break;
                ctx.globalAlpha = a * life;
                ctx.fillStyle = i % 3 ? PINK : '#ffffff';
                ctx.fillRect(cx + Math.cos(ang) * sp * k * W * 0.35, s.y + s.h * 0.45 + Math.sin(ang) * sp * k * W * 0.2 + k * k * 12, 3, 3);
            }
            ctx.globalAlpha = 1;
        }
    }

    // Five guests from behind, as on the CineGame card; a phone lights up when its guest has joined
    function drawAudience(t) {
        const r = Math.max(9, W * 0.05);
        const base = H * 0.9;
        SEATS.forEach((pi, k) => {
            const pink = pi === 0 || pi === 4;
            const cx = W * (0.14 + k * 0.18);
            const bob = reduceMotion ? 0 : Math.sin(t * 2.2 + k * 1.7) * 1.2;
            const cheering = t > S.win && pi === 0 ? -Math.abs(Math.sin(t * 9)) * r * 0.6 : 0;
            const hy = base - r * 2.6 + bob + cheering;
            const body = ctx.createLinearGradient(0, hy - r, 0, base);
            body.addColorStop(0, pink ? 'rgba(248, 105, 185, 0.5)' : 'rgba(255, 255, 255, 0.3)');
            body.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
            ctx.fillStyle = body;
            ctx.beginPath(); ctx.arc(cx, hy, r, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.roundRect(cx - r * 1.6, hy + r * 1.15, r * 3.2, H - hy, [r * 1.1, r * 1.1, 0, 0]); ctx.fill();
            ctx.strokeStyle = pink ? 'rgba(248, 105, 185, 0.8)' : 'rgba(255, 255, 255, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(cx, hy, r - 0.75, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
            const on = t >= JOINED[k];
            const pw = r * 0.55, ph = r * 0.95;
            const px = cx + (k % 2 ? -1 : 1) * r * 1.35 - pw / 2, py = hy - ph * 0.2;
            ctx.shadowColor = pink ? PINK : 'rgba(255, 255, 255, 0.8)';
            ctx.shadowBlur = on ? (pink ? 14 : 8) : 0;
            ctx.fillStyle = on ? (pink ? PINK : 'rgba(255, 255, 255, 0.75)') : 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(px, py, pw, ph);
            ctx.shadowBlur = 0;
        });
    }

    // A close-up of "your" phone, sliding up while the code is typed and when the prize arrives
    function drawPhone(t) {
        const show = Math.max(span(t, S.join + 0.1, S.play - 0.4, 0.5), span(t, S.win + 0.9, LOOP + 1, 0.5));
        if (show <= 0) return;
        const pw = Math.min(W * 0.48, H * 0.3), ph = pw * 1.9;
        const x = W * 0.5 - pw * 0.2, y = H * 0.97 - ph + (1 - ease(show)) * (ph + 30);
        ctx.save();
        ctx.translate(x + pw / 2, y + ph / 2);
        ctx.rotate(-5 * Math.PI / 180);
        ctx.translate(-pw / 2, -ph / 2);
        // Body, lit from the top left like the CineFun phone, with a pink glow
        ctx.shadowColor = 'rgba(248, 105, 185, 0.45)';
        ctx.shadowBlur = 40;
        const body = ctx.createLinearGradient(0, 0, pw, ph);
        body.addColorStop(0, '#34343e'); body.addColorStop(0.38, '#0b0b0e'); body.addColorStop(1, '#17171c');
        ctx.fillStyle = body;
        ctx.beginPath(); ctx.roundRect(0, 0, pw, ph, pw * 0.16); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
        const m = pw * 0.04, sw = pw - m * 2, sh = ph - m * 2;
        ctx.fillStyle = '#100b10';
        ctx.beginPath(); ctx.roundRect(m, m, sw, sh, pw * 0.12); ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.beginPath(); ctx.roundRect(pw * 0.34, m + pw * 0.04, pw * 0.32, pw * 0.06, pw * 0.03); ctx.fill();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = font(800, pw * 0.065);
        ctx.fillStyle = PINK;
        ctx.fillText('CINEGAME', pw / 2, m + sh * 0.12);

        if (t < S.win) {
            // Typing the code
            ctx.font = font(700, pw * 0.06);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('ENTER CODE', pw / 2, m + sh * 0.25);
            const done = t >= TYPED[3] + 0.4;
            const box = sw * 0.17, gap = sw * 0.04, bx0 = pw / 2 - (box * 4 + gap * 3) / 2, by0 = m + sh * 0.31;
            [...CODE].forEach((d, i) => {
                const bx = bx0 + i * (box + gap);
                ctx.strokeStyle = done ? PINK : (t >= TYPED[i] ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.25)');
                ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.roundRect(bx, by0, box, box * 1.25, 4); ctx.stroke();
                if (t >= TYPED[i]) {
                    ctx.font = font(900, box * 0.75);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText(d, bx + box / 2, by0 + box * 0.66);
                }
            });
            if (done) {
                glowText('✓ JOINED', pw / 2, m + sh * 0.5, pw * 0.08, PINK);
            } else {
                // Keypad: the key just typed flashes
                const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', ''];
                const pressed = TYPED.findIndex((tt, i) => t >= tt && t < tt + 0.25);
                const kw = sw * 0.24, kh = sh * 0.075, kx0 = pw / 2 - kw * 1.5 - sw * 0.03, ky0 = m + sh * 0.5;
                keys.forEach((key, i) => {
                    if (!key) return;
                    const kx = kx0 + (i % 3) * (kw + sw * 0.03), ky = ky0 + Math.floor(i / 3) * (kh + sh * 0.02);
                    const hit = pressed >= 0 && CODE[pressed] === key;
                    ctx.fillStyle = hit ? PINK : 'rgba(255, 255, 255, 0.08)';
                    ctx.beginPath(); ctx.roundRect(kx, ky, kw, kh, kh / 2); ctx.fill();
                    ctx.font = font(700, kh * 0.5);
                    ctx.fillStyle = hit ? '#0a0a0c' : 'rgba(255, 255, 255, 0.8)';
                    ctx.fillText(key, kx + kw / 2, ky + kh / 2);
                });
            }
        } else {
            // The prize: a gift and a voucher to show at the concession
            const gx = pw / 2, gy = m + sh * 0.33, gs = pw * 0.26;
            ctx.shadowColor = PINK;
            ctx.shadowBlur = 16;
            ctx.fillStyle = PINK;
            ctx.fillRect(gx - gs / 2, gy - gs * 0.25, gs, gs * 0.75);
            ctx.fillRect(gx - gs * 0.58, gy - gs * 0.45, gs * 1.16, gs * 0.24);
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#100b10';
            ctx.fillRect(gx - gs * 0.07, gy - gs * 0.45, gs * 0.14, gs * 0.95);
            glowText('YOU WON!', pw / 2, m + sh * 0.53, pw * 0.1);
            const vx = m + sw * 0.1, vy = m + sh * 0.62, vw = sw * 0.8, vh = sh * 0.17;
            ctx.setLineDash([4, 3]);
            ctx.strokeStyle = PINK;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.roundRect(vx, vy, vw, vh, 6); ctx.stroke();
            ctx.setLineDash([]);
            ctx.font = font(900, pw * 0.075);
            ctx.fillStyle = '#ffffff';
            ctx.fillText('FREE POPCORN', pw / 2, vy + vh * 0.42);
            ctx.font = font(700, pw * 0.042);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillText('SHOW AT THE CONCESSION', pw / 2, vy + vh * 0.75);
        }
        ctx.restore();
    }

    let lastStep = -1;
    function frame(now) {
        const t = reduceMotion ? 1.5 : (now / 1000) % LOOP;
        ctx.clearRect(0, 0, W, H);
        const glow = ctx.createLinearGradient(0, 0, 0, H);
        glow.addColorStop(0, 'rgba(248, 105, 185, 0.08)');
        glow.addColorStop(1, 'rgba(248, 105, 185, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);
        drawScreen(t);
        drawAudience(t);
        drawPhone(t);
        // Light up the step card for the part being shown
        const step = t < S.play ? 0 : t < S.win ? 1 : 2;
        if (step !== lastStep) {
            stepCards.forEach((li, i) => {
                li.style.transition = 'border-color 400ms';
                li.style.borderColor = i === step ? PINK : '';
            });
            lastStep = step;
        }
        if (!reduceMotion) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
})();
