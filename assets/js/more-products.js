// MORE PRODUCTS: the last section on each product page (Programmatic, CineGame, CineFun, Leadsite),
// just above the footer, with cards for the three other products. Cards and animations are the
// ones from products.html. The page names itself on the script tag:
//   <script src="assets/js/more-products.js" data-current="cinegame"></script>
// An element with data-product-visual="cinegame" (the step guides) gets that product's animation,
// without the card's text.
(function () {
    const current = document.currentScript && document.currentScript.dataset.current;
    const main = document.querySelector('main');
    if (!main) return;

    const style = document.createElement('style');
    style.textContent = `/* CineFun card: the game runs on a phone, tilted, lit from the top left with a mint glow */
.cf-phone {
    position: absolute; left: 50%; top: 9%; width: 46%; aspect-ratio: 9 / 19;
    transform: translateX(-50%) rotate(-6deg);
    padding: 6px; border-radius: 28px;
    background: linear-gradient(145deg, #34343e 0%, #0b0b0e 38%, #17171c 100%);
    box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.12),
        inset 1px 1px 0 rgba(255, 255, 255, 0.3),
        0 30px 50px -12px rgba(0, 0, 0, 0.9),
        0 0 60px -12px rgba(108, 238, 196, 0.4);
    transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}
.group:hover .cf-phone { transform: translateX(-50%) translateY(-4px) rotate(0deg); }
.cf-phone__screen { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 22px; background: #0b1413; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.8); }
.cf-phone__screen::after { content: ''; position: absolute; inset: 0; background: linear-gradient(115deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 38%); pointer-events: none; }
.cf-phone__island { position: absolute; top: 6px; left: 50%; width: 32%; height: 10px; transform: translateX(-50%); border-radius: 999px; background: #000000; }
.cf-phone__status { position: absolute; top: 5px; left: 12px; right: 12px; display: flex; justify-content: space-between; font-size: 8px; font-weight: 700; line-height: 12px; color: rgba(255, 255, 255, 0.8); }
.cf-phone__app { position: absolute; top: 26px; inset-inline: 0; text-align: center; font-size: 9px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #6ceec4; }`;
    document.head.appendChild(style);

    const cards = {
        programmatic: `<a href="programmatic.html" class="group block">
    <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-card border border-brand-border group-hover:border-brand-cyan transition-colors">
        <!-- Programmatic: cells are cinema screens, the cursor is the targeting -->
        <div class="mp-rtb absolute inset-0 p-4 select-none" role="img" aria-label="Animated illustration of programmatic targeting across cinema screens">
            <div class="relative w-full h-full">
                <div class="mp-rtb-grid absolute inset-0 grid grid-cols-8 grid-rows-8 gap-[3px]"></div>
                <span class="mp-rtb-tag absolute pointer-events-none px-1.5 py-0.5 bg-brand-cyan text-black text-[9px] font-bold uppercase tracking-wider whitespace-nowrap transition-[left,top] duration-150 ease-out"></span>
            </div>
        </div>
        <div class="case-blur"></div>
        <div class="absolute inset-x-0 bottom-0 p-5 space-y-2 pointer-events-none">
            <h3 class="text-xl font-black uppercase !leading-none text-white group-hover:text-brand-cyan transition">Programmatic</h3>
            <p class="text-sm text-white/80 leading-relaxed">Automated, targetable and transparent cinema ad buying with real-time impression reporting.</p>
            <span class="block text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-brand-cyan transition">Learn more <i class="fa-solid fa-arrow-right ml-1"></i></span>
        </div>
    </div>
</a>`,
        cinegame: `<a href="cinegame.html" class="group block">
    <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-card border border-brand-border group-hover:border-brand-pink transition-colors">
        <!-- CineGame: a five-a-side football game on the cinema screen, the cursor steers "You" -->
        <div class="mp-cgf absolute inset-0 select-none" role="img" aria-label="Animated illustration of a five-player CineGame football match on the cinema screen">
            <canvas class="mp-cgf-screen absolute inset-0 w-full h-full"></canvas>
        </div>
        <div class="case-blur"></div>
        <div class="absolute inset-x-0 bottom-0 p-5 space-y-2 pointer-events-none">
            <h3 class="text-xl font-black uppercase !leading-none text-white group-hover:text-brand-pink transition">CineGame</h3>
            <p class="text-sm text-white/80 leading-relaxed">Whole auditoriums play branded games on the big screen, using their phones as controllers.</p>
            <span class="block text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-brand-pink transition">Learn more <i class="fa-solid fa-arrow-right ml-1"></i></span>
        </div>
    </div>
</a>`,
        cinefun: `<a href="cinefun.html" class="group block">
    <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-card border border-brand-border group-hover:border-brand-mint transition-colors">
        <!-- CineFun: the catch game in mint on a phone; the cursor steers the paddle -->
        <div class="cg-viz absolute inset-0 select-none" data-accent="108, 238, 196" role="img" aria-label="Animated illustration of a CineFun catch game played with your phone">
            <div class="cf-phone">
                <div class="cf-phone__screen">
                    <canvas class="cg-screen absolute inset-0 w-full h-full"></canvas>
                    <div class="cf-phone__status"><span>9:41</span><span><i class="fa-solid fa-signal"></i> <i class="fa-solid fa-battery-three-quarters ml-0.5"></i></span></div>
                    <div class="cf-phone__island"></div>
                    <div class="cf-phone__app">CineFun</div>
                </div>
            </div>
            <span class="cg-hint absolute top-3 left-4 text-[10px] font-bold uppercase tracking-wider text-white/50">Move to play</span>
        </div>
        <div class="case-blur"></div>
        <div class="absolute inset-x-0 bottom-0 p-5 space-y-2 pointer-events-none">
            <h3 class="text-xl font-black uppercase !leading-none text-white group-hover:text-brand-mint transition">CineFun</h3>
            <p class="text-sm text-white/80 leading-relaxed">Quizzes, lobby kiosks and loyalty tie-ins that entertain moviegoers before and after the film.</p>
            <span class="block text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-brand-mint transition">Learn more <i class="fa-solid fa-arrow-right ml-1"></i></span>
        </div>
    </div>
</a>`,
        leadsite: `<a href="leadsite.html" class="group block">
    <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-card border border-brand-border group-hover:border-brand-orange transition-colors">
        <!-- Leadsite: a wheel of fortune; it spins by itself, and again when you point at it -->
        <div class="mp-ls absolute inset-x-0 top-0 h-[64%] flex items-center justify-center p-6 select-none" role="img" aria-label="Animated wheel of fortune spinning and landing on a prize">
            <svg viewBox="-110 -118 220 228" class="mp-ls-wheel h-full w-auto overflow-visible"></svg>
        </div>
        <div class="case-blur"></div>
        <div class="absolute inset-x-0 bottom-0 p-5 space-y-2 pointer-events-none">
            <h3 class="text-xl font-black uppercase !leading-none text-white group-hover:text-brand-orange transition">Leadsite</h3>
            <p class="text-sm text-white/80 leading-relaxed">A branded wheel of fortune: the audience spins for a prize and signs up for the advertiser's news.</p>
            <span class="block text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-brand-orange transition">Learn more <i class="fa-solid fa-arrow-right ml-1"></i></span>
        </div>
    </div>
</a>`,
    };

    const section = document.createElement('section');
    section.id = 'more-products';
    section.className = 'border-b border-brand-border scroll-mt-20';
    section.innerHTML = `
        <div class="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                <aside class="lg:col-span-3 lg:sticky lg:top-28 lg:self-start space-y-6">
                    <span class="block text-[10px] font-bold uppercase tracking-widest text-brand-yellow">Products</span>
                    <h2 class="section-title font-black uppercase !leading-none">Additional products</h2>
                    <p class="text-sm text-gray-400 leading-relaxed">
                        More ways to engage the cinema audience, on the big screen, in the lobby and on their phones.
                    </p>
                    <a href="products.html" class="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-brand-cyan transition">
                        All products <i class="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                </aside>
                <div class="lg:col-span-9">
                    <!-- card-grid: 4 across from 1700px, so the cards match the other product cards (rule in each page) -->
                    <div class="grid card-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        ${Object.keys(cards).filter(k => k !== current).map(k => cards[k]).join('')}
                    </div>
                </div>
            </div>
        </div>`;
    main.appendChild(section);

    // The animations, started inside root
    function animate(root) {
        // --- PROGRAMMATIC CARD: TARGETING ---
        // Cells are cinema screens; the cursor (or a slow auto-pilot when idle) is the audience targeting.
        (function initRtbViz() {
            const viz = root.querySelector('.mp-rtb');
            if (!viz) return;
            const grid = root.querySelector('.mp-rtb-grid');
            const tag = root.querySelector('.mp-rtb-tag');
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const SIZE = 8;
            const RADIUS = 0.3;
            const cells = [];
            for (let i = 0; i < SIZE * SIZE; i++) {
                const el = document.createElement('div');
                el.style.transition = 'background-color 150ms linear';
                grid.appendChild(el);
                cells.push({ el, x: (i % SIZE + 0.5) / SIZE, y: (Math.floor(i / SIZE) + 0.5) / SIZE, flicker: Math.random() });
            }

            let target = { x: 0.5, y: 0.5 };
            let hovering = false;
            const t0 = performance.now();

            viz.addEventListener('pointermove', e => {
                const r = grid.getBoundingClientRect();
                hovering = true;
                target = {
                    x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
                    y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
                };
            });
            viz.addEventListener('pointerleave', () => { hovering = false; });

            function paint(now) {
                if (!hovering && !reduceMotion) {
                    // Idle: targeting drifts on a slow figure-eight so the card is never static
                    const t = (now - t0) / 4000;
                    target = { x: 0.5 + Math.sin(t) * 0.3, y: 0.5 + Math.sin(t * 2) * 0.22 };
                }
                let active = 0;
                cells.forEach(c => {
                    const d = Math.hypot(c.x - target.x, c.y - target.y);
                    if (d < RADIUS) {
                        active++;
                        c.el.style.backgroundColor = `rgba(61, 192, 200, ${0.25 + (1 - d / RADIUS) * 0.75})`;
                    } else {
                        c.flicker = (c.flicker + 0.01 + Math.random() * 0.02) % 1;
                        c.el.style.backgroundColor = `rgba(255, 255, 255, ${0.05 + (c.flicker > 0.97 ? 0.15 : 0)})`;
                    }
                });
                tag.textContent = `${active} audience-targeted`;
                const r = grid.getBoundingClientRect();
                const tagW = tag.offsetWidth;
                tag.style.left = `${Math.min(r.width - tagW, Math.max(0, target.x * r.width - tagW / 2))}px`;
                tag.style.top = `${Math.max(0, target.y * r.height - 28)}px`;
            }

            paint(performance.now());
            if (reduceMotion) return;
            (function loop(now) {
                paint(now);
                requestAnimationFrame(loop);
            })(performance.now());
        })();

        // --- CINEFUN CARD: CATCH GAME ---
        // A catch game; the cursor is your phone steering the paddle
        // (an auto-player takes over when idle). The colour comes from the card (data-accent).
        (function initCineFunViz() {
            root.querySelectorAll('.cg-viz').forEach(viz => {
                const canvas = viz.querySelector('.cg-screen');
                const ctx = canvas.getContext('2d');
                const hintEl = viz.querySelector('.cg-hint');
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                const RGB = viz.dataset.accent || '248, 105, 185';
                const ACCENT = `rgb(${RGB})`;
                const COIN_COLORS = [ACCENT];
                const PADDLE_W = 0.3;
                const PADDLE_Y = 0.5; // on the part of the phone above the card's text overlay

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

                let hovering = false;
                let pointerX = 0.5;
                let paddleX = 0.5;
                let coins = [];
                let sparks = [];
                let spawnIn = 0;
                let last = performance.now();

                viz.addEventListener('pointermove', e => {
                    const r = canvas.getBoundingClientRect();
                    hovering = true;
                    pointerX = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
                    hintEl.textContent = "You're playing";
                });
                viz.addEventListener('pointerleave', () => {
                    hovering = false;
                    hintEl.textContent = 'Move to play';
                });

                function step(now) {
                    const dt = Math.min(0.05, (now - last) / 1000);
                    last = now;

                    spawnIn -= dt;
                    if (spawnIn <= 0) {
                        coins.push({ x: 0.08 + Math.random() * 0.84, y: -0.05, vy: 0.35 + Math.random() * 0.25, color: COIN_COLORS[Math.floor(Math.random() * COIN_COLORS.length)] });
                        spawnIn = hovering ? 0.45 : 0.7;
                    }

                    // Paddle follows your phone, or the lowest coin when nobody is playing
                    let target = pointerX;
                    if (!hovering) {
                        const next = coins.filter(c => c.y < PADDLE_Y + 0.02).sort((a, b) => b.y - a.y)[0];
                        target = next ? next.x : 0.5;
                    }
                    paddleX += (target - paddleX) * Math.min(1, dt * (hovering ? 18 : 5));

                    coins = coins.filter(c => {
                        const prevY = c.y;
                        c.y += c.vy * dt;
                        if (prevY < PADDLE_Y && c.y >= PADDLE_Y && Math.abs(c.x - paddleX) < PADDLE_W / 2) {
                            for (let i = 0; i < 8; i++) {
                                sparks.push({ x: c.x, y: PADDLE_Y, vx: (Math.random() - 0.5) * 0.8, vy: -Math.random() * 0.8, life: 1, color: c.color });
                            }
                            return false;
                        }
                        return c.y < PADDLE_Y + 0.12; // missed coins vanish before they reach the text
                    });

                    sparks = sparks.filter(p => {
                        p.x += p.vx * dt;
                        p.y += p.vy * dt;
                        p.vy += 1.6 * dt;
                        p.life -= dt * 1.8;
                        return p.life > 0;
                    });

                    draw();
                    requestAnimationFrame(step);
                }

                function draw() {
                    ctx.clearRect(0, 0, W, H);
                    // Faint projector light from the top
                    const glow = ctx.createLinearGradient(0, 0, 0, H);
                    glow.addColorStop(0, `rgba(${RGB}, 0.08)`);
                    glow.addColorStop(1, `rgba(${RGB}, 0)`);
                    ctx.fillStyle = glow;
                    ctx.fillRect(0, 0, W, H);

                    const s = Math.max(6, W * 0.07);
                    coins.forEach(c => {
                        ctx.fillStyle = c.color;
                        ctx.fillRect(c.x * W - s / 2, c.y * H - s / 2, s, s);
                    });
                    sparks.forEach(p => {
                        ctx.globalAlpha = Math.max(0, p.life);
                        ctx.fillStyle = p.color;
                        ctx.fillRect(p.x * W - 1.5, p.y * H - 1.5, 3, 3);
                    });
                    ctx.globalAlpha = 1;

                    ctx.shadowBlur = 12;
                    ctx.shadowColor = ACCENT;
                    ctx.fillStyle = ACCENT;
                    ctx.fillRect((paddleX - PADDLE_W / 2) * W, PADDLE_Y * H, PADDLE_W * W, Math.max(4, H * 0.02));
                    ctx.shadowBlur = 0;
                }

                if (reduceMotion) {
                    draw();
                    return;
                }
                requestAnimationFrame(step);
            });
        })();

        // --- CINEGAME CARD: FIVE-A-SIDE FOOTBALL ON THE CINEMA SCREEN ---
        // "You" (pink, like Player 5) is steered by the cursor, your phone; Player 2 is on your team, Players 3–5 play
        // the other way. Everyone chases the ball and kicks it towards the goal they attack. An
        // auto-player steers "You" when idle.
        (function initCineGameFootball() {
            const viz = root.querySelector('.mp-cgf');
            if (!viz) return;
            const canvas = root.querySelector('.mp-cgf-screen');
            const ctx = canvas.getContext('2d');
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const ACCENT = '#f869b9';
            // The pitch, as fractions of the canvas; it stays above the card's text overlay
            const PITCH = { x: 0.07, y: 0.09, w: 0.86, h: 0.33 };
            const GOAL_HALF = 0.16; // half the goal mouth, as a fraction of the pitch height

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

            // Positions are in pitch units (0–1 across and down); goal: the x of the goal this player attacks
            const players = [
                { name: 'You', goal: 1, home: [0.3, 0.5], speed: 0.42 },
                { name: 'Player 2', goal: 1, home: [0.22, 0.25], speed: 0.3 },
                { name: 'Player 3', goal: 0, home: [0.7, 0.5], speed: 0.3 },
                { name: 'Player 4', goal: 0, home: [0.78, 0.22], speed: 0.27 },
                { name: 'Player 5', goal: 0, home: [0.78, 0.78], speed: 0.24 },
            ];
            const ball = { x: 0.5, y: 0.5, vx: 0, vy: 0 };
            let sparks = [];
            let goalFlash = 0;

            function kickOff() {
                players.forEach(p => { p.x = p.home[0]; p.y = p.home[1]; p.cool = 0; });
                Object.assign(ball, { x: 0.5, y: 0.5, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
            }
            kickOff();

            let hovering = false;
            let pointer = { x: 0.5, y: 0.5 };
            let last = performance.now();

            viz.addEventListener('pointermove', e => {
                const r = canvas.getBoundingClientRect();
                hovering = true;
                pointer.x = Math.min(1, Math.max(0, ((e.clientX - r.left) / r.width - PITCH.x) / PITCH.w));
                pointer.y = Math.min(1, Math.max(0, ((e.clientY - r.top) / r.height - PITCH.y) / PITCH.h));
            });
            viz.addEventListener('pointerleave', () => {
                hovering = false;
            });

            const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

            function step(now) {
                const dt = Math.min(0.05, (now - last) / 1000);
                last = now;

                if (goalFlash > 0) {
                    goalFlash -= dt;
                    if (goalFlash <= 0) kickOff();
                } else {
                    // On each team only the player nearest the ball runs at it; the rest keep their
                    // position, shifted along with the play
                    const chasers = [1, 0].map(goal => players.filter(p => p.goal === goal && !(p.name === 'You' && hovering))
                        .sort((a, b) => Math.hypot(a.x - ball.x, a.y - ball.y) - Math.hypot(b.x - ball.x, b.y - ball.y))[0]);
                    players.forEach((p, i) => {
                        p.cool -= dt;
                        let tx, ty;
                        if (i === 0 && hovering) {
                            tx = pointer.x; ty = pointer.y;
                        } else if (chasers.includes(p)) {
                            tx = ball.x + (p.goal === 1 ? -0.03 : 0.03); // from the side facing the goal they attack
                            ty = ball.y;
                        } else {
                            tx = clamp(p.home[0] + (ball.x - 0.5) * 0.6, 0.05, 0.95);
                            ty = clamp(p.home[1] + (ball.y - 0.5) * 0.4, 0.08, 0.92);
                        }
                        const dx = tx - p.x, dy = ty - p.y;
                        const d = Math.hypot(dx, dy);
                        const move = Math.min(d, (i === 0 && hovering ? 2.2 : p.speed) * dt);
                        if (d > 0.001) { p.x += dx / d * move; p.y += dy / d * move; }
                        // Keep a little room between players so their names don't overlap
                        players.forEach(q => {
                            if (q === p) return;
                            const ox = p.x - q.x, oy = p.y - q.y, od = Math.hypot(ox, oy);
                            if (od > 0 && od < 0.12) { p.x += ox / od * (0.12 - od) * dt * 4; p.y += oy / od * (0.12 - od) * dt * 4; }
                        });
                        p.x = clamp(p.x, 0, 1);
                        p.y = clamp(p.y, 0, 1);

                        // Touch the ball: kick it towards the goal, pushed a little in the running direction
                        const bx = ball.x - p.x, by = ball.y - p.y;
                        const bd = Math.hypot(bx, by);
                        if (bd < 0.05 && p.cool <= 0) {
                            const gx = p.goal - ball.x, gy = 0.5 + (Math.random() - 0.5) * 0.5 - ball.y;
                            const gd = Math.hypot(gx, gy) || 1;
                            const kx = gx / gd * 0.7 + (bx / (bd || 1)) * 0.3;
                            const ky = gy / gd * 0.7 + (by / (bd || 1)) * 0.3;
                            const power = 0.7 + Math.random() * 0.5;
                            ball.vx = kx * power;
                            ball.vy = ky * power;
                            p.cool = 0.35;
                        }
                    });

                    ball.x += ball.vx * dt;
                    ball.y += ball.vy * dt;
                    const friction = Math.exp(-1.4 * dt);
                    ball.vx *= friction;
                    ball.vy *= friction;
                    if (ball.y < 0 || ball.y > 1) { ball.vy *= -0.8; ball.y = clamp(ball.y, 0, 1); }
                    const inMouth = Math.abs(ball.y - 0.5) < GOAL_HALF;
                    if (ball.x < 0 || ball.x > 1) {
                        if (inMouth) {
                            const side = ball.x > 1 ? 1 : 0;
                            goalFlash = 1.4;
                            const gx = PITCH.x + side * PITCH.w, gy = PITCH.y + 0.5 * PITCH.h;
                            for (let i = 0; i < 26; i++) {
                                sparks.push({ x: gx, y: gy, vx: (side ? -1 : 1) * Math.random() * 0.5, vy: (Math.random() - 0.5) * 0.7, life: 1 });
                            }
                        } else {
                            ball.vx *= -0.8;
                            ball.x = clamp(ball.x, 0, 1);
                        }
                    }
                }

                sparks = sparks.filter(s => {
                    s.x += s.vx * dt;
                    s.y += s.vy * dt;
                    s.vy += 0.9 * dt;
                    s.life -= dt * 1.2;
                    return s.life > 0;
                });

                draw();
                requestAnimationFrame(step);
            }

            const px = x => (PITCH.x + x * PITCH.w) * W;
            const py = y => (PITCH.y + y * PITCH.h) * H;

            function draw() {
                ctx.clearRect(0, 0, W, H);
                // Faint projector light from the top
                const glow = ctx.createLinearGradient(0, 0, 0, H);
                glow.addColorStop(0, 'rgba(248, 105, 185, 0.08)');
                glow.addColorStop(1, 'rgba(248, 105, 185, 0)');
                ctx.fillStyle = glow;
                ctx.fillRect(0, 0, W, H);

                // Pitch lines
                const x0 = px(0), x1 = px(1), y0 = py(0), y1 = py(1);
                const pw = x1 - x0, ph = y1 - y0;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
                ctx.lineWidth = 1;
                ctx.strokeRect(x0 + 0.5, y0 + 0.5, pw, ph);
                ctx.beginPath();
                ctx.moveTo(x0 + pw / 2, y0); ctx.lineTo(x0 + pw / 2, y1);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x0 + pw / 2, y0 + ph / 2, ph * 0.18, 0, Math.PI * 2);
                ctx.stroke();
                ctx.strokeRect(x0 + 0.5, py(0.5 - 0.3), pw * 0.12, ph * 0.6);
                ctx.strokeRect(x1 - pw * 0.12 + 0.5, py(0.5 - 0.3), pw * 0.12, ph * 0.6);

                // Goals: pink posts, glowing while a goal is celebrated
                ctx.shadowColor = ACCENT;
                ctx.shadowBlur = goalFlash > 0 ? 16 : 6;
                ctx.fillStyle = ACCENT;
                const gh = ph * GOAL_HALF * 2, gw = Math.max(3, W * 0.012);
                ctx.fillRect(x0 - gw, py(0.5) - gh / 2, gw, gh);
                ctx.fillRect(x1, py(0.5) - gh / 2, gw, gh);
                ctx.shadowBlur = 0;

                // Players with their names above them
                const s = Math.max(6, W * 0.032);
                ctx.font = `700 ${Math.max(8, Math.round(W * 0.026))}px "General Sans", sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                players.slice().reverse().forEach(p => {
                    const you = p.name === 'You';
                    const pink = you || p.name === 'Player 5';
                    const x = px(p.x), y = py(p.y);
                    ctx.fillStyle = pink ? ACCENT : (p.goal === 1 ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.45)');
                    if (pink) { ctx.shadowColor = ACCENT; ctx.shadowBlur = 12; }
                    ctx.fillRect(x - s / 2, y - s / 2, s, s);
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = pink ? ACCENT : 'rgba(255, 255, 255, 0.55)';
                    ctx.fillText(you ? 'YOU' : p.name.toUpperCase(), x, y - s / 2 - 3);
                });

                // Ball
                const b = Math.max(4, W * 0.018);
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 8;
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px(ball.x) - b / 2, py(ball.y) - b / 2, b, b);
                ctx.shadowBlur = 0;

                sparks.forEach(p => {
                    ctx.globalAlpha = Math.max(0, p.life);
                    ctx.fillStyle = ACCENT;
                    ctx.fillRect(p.x * W - 1.5, p.y * H - 1.5, 3, 3);
                });
                ctx.globalAlpha = 1;

                drawAudience();

                // GOAL! over the pitch while celebrating
                if (goalFlash > 0) {
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = `900 ${Math.round(W * 0.11)}px "General Sans", sans-serif`;
                    ctx.globalAlpha = Math.min(1, goalFlash * 2);
                    ctx.shadowColor = ACCENT;
                    ctx.shadowBlur = 20;
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText('GOAL!', W / 2, py(0.5));
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1;
                }
            }

            // Five cinema guests seen from behind, watching the screen with their phones up; each one
            // plays one of the players. Lit from the screen above, they bob along and jump at a goal.
            const SEATS = [1, 3, 0, 2, 4]; // which player each seat plays, left to right ("You" in the middle)
            function drawAudience() {
                const t = performance.now() / 1000;
                const r = Math.max(9, W * 0.045);
                const base = H * 0.66;
                SEATS.forEach((pi, k) => {
                    const pink = pi === 0 || pi === 4; // You and Player 5
                    const cx = W * (0.14 + k * 0.18);
                    const bob = reduceMotion ? 0 : Math.sin(t * 2.2 + k * 1.7) * 1.2;
                    const jump = goalFlash > 0 && !reduceMotion ? -Math.abs(Math.sin(t * 9 + k)) * r * 0.6 : 0;
                    const hy = base - r * 2.6 + bob + jump;

                    // Body: shoulders and head, lighter at the top where the screen light hits
                    const body = ctx.createLinearGradient(0, hy - r, 0, base);
                    body.addColorStop(0, pink ? 'rgba(248, 105, 185, 0.5)' : 'rgba(255, 255, 255, 0.3)');
                    body.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
                    ctx.fillStyle = body;
                    ctx.beginPath();
                    ctx.arc(cx, hy, r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.roundRect(cx - r * 1.6, hy + r * 1.15, r * 3.2, base - hy, [r * 1.1, r * 1.1, 0, 0]);
                    ctx.fill();
                    // Rim light along the top of the head
                    ctx.strokeStyle = pink ? 'rgba(248, 105, 185, 0.8)' : 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(cx, hy, r - 0.75, Math.PI * 1.15, Math.PI * 1.85);
                    ctx.stroke();

                    // Phone held up beside the head, glowing
                    const pw = r * 0.55, ph = r * 0.95;
                    const pxp = cx + (k % 2 ? -1 : 1) * r * 1.35 - pw / 2;
                    const pyp = hy - ph * 0.2;
                    ctx.shadowColor = pink ? ACCENT : 'rgba(255, 255, 255, 0.8)';
                    ctx.shadowBlur = pink ? 14 : 8;
                    ctx.fillStyle = pink ? ACCENT : 'rgba(255, 255, 255, 0.75)';
                    ctx.fillRect(pxp, pyp, pw, ph);
                    ctx.shadowBlur = 0;
                });
            }

            if (reduceMotion) {
                draw();
                return;
            }
            requestAnimationFrame(step);
        })();

        // --- LEADSITE CARD: WHEEL OF FORTUNE ---
        // An orange wheel spins, slows down and lands on a segment that lights up; then it waits and
        // spins again. Pointing at the card starts a spin straight away.
        (function initLeadsiteWheel() {
            const svg = root.querySelector('.mp-ls-wheel');
            if (!svg) return;
            const SVG_NS = 'http://www.w3.org/2000/svg';
            const ORANGE = '#fea917';
            const SEGMENTS = 8;
            const R = 100;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const el = (name, attrs) => { const e = document.createElementNS(SVG_NS, name); Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v)); return e; };

            // Glow behind the wheel, the rotating wheel itself, then the hub and the pointer on top
            svg.append(el('circle', { r: R + 6, fill: 'none', stroke: 'rgba(254, 169, 23, 0.25)', 'stroke-width': 6 }));
            const wheel = el('g', {});
            const slices = [];
            for (let i = 0; i < SEGMENTS; i++) {
                const a0 = (i / SEGMENTS) * Math.PI * 2 - Math.PI / 2, a1 = ((i + 1) / SEGMENTS) * Math.PI * 2 - Math.PI / 2;
                const d = `M0,0 L${R * Math.cos(a0)},${R * Math.sin(a0)} A${R},${R} 0 0 1 ${R * Math.cos(a1)},${R * Math.sin(a1)} Z`;
                const slice = el('path', { d, fill: i % 2 ? 'rgba(254, 169, 23, 0.35)' : ORANGE, stroke: '#121216', 'stroke-width': 2 });
                slice.style.transition = 'fill 300ms linear';
                wheel.append(slice);
                slices.push({ slice, base: slice.getAttribute('fill') });
                // A small star on every other segment: the prizes
                const mid = (a0 + a1) / 2;
                if (i % 2 === 0) {
                    const star = el('text', { x: 66 * Math.cos(mid), y: 66 * Math.sin(mid) + 6, 'text-anchor': 'middle', 'font-size': 18, fill: '#0a0a0c', transform: `rotate(${mid * 180 / Math.PI + 90} ${66 * Math.cos(mid)} ${66 * Math.sin(mid)})` });
                    star.textContent = '★';
                    wheel.append(star);
                }
            }
            wheel.append(el('circle', { r: R, fill: 'none', stroke: ORANGE, 'stroke-width': 3 }));
            svg.append(wheel);
            svg.append(el('circle', { r: 16, fill: '#0a0a0c', stroke: ORANGE, 'stroke-width': 3 }));
            svg.append(el('path', { d: 'M-11,-116 L11,-116 L0,-94 Z', fill: '#ffffff' }));

            let angle = 0, spinning = false, waitTimer = null;
            const draw = () => wheel.setAttribute('transform', `rotate(${angle})`);
            const ease = t => 1 - Math.pow(1 - t, 3);
            function highlight(index) {
                slices.forEach((s, i) => s.slice.setAttribute('fill', i === index ? '#ffffff' : s.base));
                setTimeout(() => slices.forEach(s => s.slice.setAttribute('fill', s.base)), 1400);
            }
            function spin() {
                if (spinning) return;
                clearTimeout(waitTimer);
                spinning = true;
                const target = Math.floor(Math.random() * SEGMENTS);
                // Land with the middle of the target segment under the pointer at the top
                const landing = 360 - (target + 0.5) * (360 / SEGMENTS);
                const from = angle, to = from + 360 * 4 + ((landing - (from % 360)) + 360) % 360;
                const start = performance.now(), duration = 3200;
                (function frame(now) {
                    const t = Math.min(1, (now - start) / duration);
                    angle = from + (to - from) * ease(t);
                    draw();
                    if (t < 1) return requestAnimationFrame(frame);
                    angle %= 360;
                    spinning = false;
                    highlight(target);
                    waitTimer = setTimeout(spin, 2600);
                })(start);
            }
            draw();
            if (reduceMotion) return;
            root.querySelector('.mp-ls').closest('.group').addEventListener('pointerenter', spin);
            waitTimer = setTimeout(spin, 800);
        })();

    }
    animate(section);

    // Step guides show the page's own product: the card's animation without its text
    document.querySelectorAll('[data-product-visual]').forEach(box => {
        const card = document.createElement('div');
        card.innerHTML = cards[box.dataset.productVisual] || '';
        const inner = card.querySelector('.relative');
        if (!inner) return;
        inner.querySelectorAll(':scope > .case-blur, :scope > .bottom-0').forEach(el => el.remove());
        box.innerHTML = inner.innerHTML;
        animate(box);
    });
})();
