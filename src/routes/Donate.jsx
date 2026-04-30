import { useState } from "react";
import { useRazorpay } from "react-razorpay";

const INDIA_MAP_PATH =
  "M 380,40 C 370,38 355,42 345,50 C 335,58 330,70 320,75 C 310,80 295,78 285,85 C 275,92 270,105 260,112 C 250,119 235,120 225,128 C 215,136 210,150 205,162 C 200,174 198,188 195,200 C 192,212 188,224 182,234 C 176,244 168,252 164,263 C 160,274 160,287 157,298 C 154,309 148,319 146,330 C 144,341 145,353 142,364 C 139,375 132,384 128,395 C 124,406 122,418 118,429 C 114,440 108,450 105,461 C 102,472 101,484 100,496 C 99,508 99,521 100,533 C 101,545 104,557 108,568 C 112,579 118,589 124,599 C 130,609 137,618 143,628 C 149,638 154,649 162,657 C 170,665 180,670 188,678 C 196,686 202,696 212,702 C 222,708 234,710 244,716 C 254,722 263,730 274,734 C 285,738 297,738 308,742 C 319,746 329,752 340,755 C 351,758 363,758 374,760 C 385,762 396,765 407,764 C 418,763 428,758 439,756 C 450,754 462,754 472,750 C 482,746 491,738 500,733 C 509,728 519,724 528,718 C 537,712 545,704 552,696 C 559,688 565,679 570,670 C 575,661 578,651 582,641 C 586,631 590,621 592,611 C 594,601 594,590 594,580 C 594,570 592,559 590,549 C 588,539 585,529 581,520 C 577,511 572,503 567,495 C 562,487 556,480 550,473 C 544,466 537,460 530,455 C 523,450 515,446 508,442 C 501,438 494,434 487,430 C 480,426 473,421 466,416 C 459,411 453,404 447,399 C 441,394 434,389 428,384 C 422,379 416,373 411,367 C 406,361 402,354 397,348 C 392,342 387,336 382,330 C 377,324 371,318 367,312 C 363,306 360,299 356,293 C 352,287 347,282 344,276 C 341,270 339,263 336,257 C 333,251 329,245 327,239 C 325,233 323,226 321,220 C 319,214 317,207 315,201 C 313,195 311,188 308,182 C 305,176 301,171 298,165 C 295,159 292,153 289,147 C 286,141 282,135 280,129 C 278,123 276,117 274,111 C 272,105 269,99 267,93 C 265,87 262,81 259,75 C 256,69 252,64 248,59 C 244,54 239,49 234,46 C 229,43 223,41 218,40 C 213,39 207,39 202,41 C 197,43 193,47 190,52 C 187,57 185,63 183,69 C 181,75 180,81 179,87 C 178,93 177,99 175,105 C 173,111 170,117 168,122 C 166,127 163,133 162,139 C 161,145 161,152 160,158 C 159,164 157,170 156,176 C 155,182 154,189 153,195 C 152,201 150,207 149,213 C 148,219 147,226 147,232 C 147,238 147,244 148,250 C 149,256 151,262 153,268 C 155,274 158,280 161,285 C 164,290 168,295 172,300 C 176,305 181,309 185,314 C 189,319 193,325 197,330 C 201,335 205,341 208,347 C 211,353 213,360 215,366 C 217,372 218,379 218,385 C 218,391 217,397 215,403 C 213,409 210,415 207,420 C 204,425 200,430 196,434 C 192,438 187,442 183,446 C 179,450 175,454 173,459 C 171,464 171,470 170,476 C 169,482 168,488 167,494 C 166,500 164,506 163,512 C 162,518 161,524 162,530 C 163,536 165,542 168,547 C 171,552 175,557 179,561 C 183,565 188,569 193,572 C 198,575 203,577 208,579 C 213,581 218,582 224,583 C 230,584 236,584 242,583 C 248,582 254,580 259,577 C 264,574 269,570 273,566 C 277,562 281,558 284,553 C 287,548 289,543 291,537 C 293,531 294,525 294,519 C 294,513 293,507 291,502 C 289,497 286,492 283,488 C 280,484 276,480 273,475 C 270,470 267,465 265,460 C 263,455 261,449 260,443 C 259,437 259,431 260,425 C 261,419 263,413 266,408 C 269,403 273,399 277,395 C 281,391 285,387 290,384 C 295,381 300,378 305,375 C 310,372 315,369 320,366 C 325,363 330,359 335,356 C 340,353 345,349 350,347 C 355,345 360,343 365,342 C 370,341 375,340 380,340 C 385,340 390,341 395,343 C 400,345 405,348 409,352 C 413,356 416,361 419,366 C 422,371 424,377 426,383 C 428,389 429,395 429,401 C 429,407 428,413 426,419 C 424,425 421,431 417,436 C 413,441 408,445 403,449 C 398,453 393,456 388,459 C 383,462 377,464 372,466 C 367,468 362,469 358,471 C 354,473 351,475 348,478 C 345,481 343,484 341,488 C 339,492 337,496 336,500 C 335,504 334,508 334,512 C 334,516 335,520 336,524 C 337,528 339,532 342,536 C 345,540 349,544 353,547 C 357,550 362,553 367,555 C 372,557 378,558 384,558 C 390,558 396,557 402,555 C 408,553 414,550 420,546 C 426,542 431,537 436,532 C 441,527 445,521 449,515 C 453,509 456,502 459,495 C 462,488 464,481 465,473 C 466,465 466,457 465,449 C 464,441 462,433 459,426 C 456,419 451,413 447,406 C 443,399 439,392 436,385 C 433,378 431,371 430,363 C 429,355 429,347 430,339 C 431,331 433,323 436,315 C 439,307 443,299 447,292 C 451,285 455,278 460,271 C 465,264 470,257 475,251 C 480,245 485,239 490,233 C 495,227 500,221 504,215 C 508,209 511,202 514,196 C 517,190 519,183 521,177 C 523,171 524,164 524,158 C 524,152 523,146 521,140 C 519,134 516,128 512,123 C 508,118 503,114 498,110 C 493,106 487,102 481,99 C 475,96 469,94 462,92 C 455,90 448,89 441,88 C 434,87 427,87 420,87 C 413,87 406,88 399,89 C 392,90 385,92 378,94 C 371,96 364,99 358,102 C 352,105 346,108 341,112 C 336,116 331,120 326,124 C 321,128 316,132 312,136 C 308,140 304,144 300,148 C 296,152 292,157 288,161 C 284,165 279,169 275,173 C 271,177 267,181 263,185 C 259,189 255,193 251,197 C 247,201 243,205 239,208 C 235,211 231,214 228,217 C 225,220 223,224 220,227 C 217,230 214,233 212,236 C 210,239 208,242 207,245 C 206,248 205,251 205,254 C 205,257 206,260 207,263 C 208,266 210,269 212,272 C 214,275 217,278 219,281 C 221,284 223,287 225,290 C 227,293 229,296 230,299 C 231,302 232,305 232,308 C 232,311 231,314 230,317 C 229,320 227,323 225,325 C 223,327 221,329 219,331 C 217,333 215,334 213,336 C 211,338 209,340 208,342 C 207,344 206,346 206,349 C 206,352 207,355 208,358 C 209,361 211,364 213,367 C 215,370 218,372 220,375 C 222,378 224,381 226,384 C 228,387 230,390 231,393 C 232,396 232,399 232,402 C 232,405 231,408 230,411 C 229,414 227,417 225,420 C 223,423 221,425 219,427 C 217,429 215,431 213,433 C 211,435 208,437 207,440 C 206,443 206,446 207,449 C 208,452 210,455 213,458 C 216,461 220,463 224,465 C 228,467 233,469 238,470 C 243,471 248,471 253,471 C 258,471 263,470 268,469 C 273,468 278,466 283,464 C 288,462 293,459 298,456 C 303,453 308,450 312,446 C 316,442 320,438 323,433 C 326,428 328,423 330,418 C 332,413 333,407 334,402 C 335,397 335,391 334,386 C 333,381 331,376 328,371 C 325,366 321,362 317,358 C 313,354 309,350 305,346 C 301,342 297,338 294,334 C 291,330 289,325 287,320 C 285,315 284,310 284,305 C 284,300 285,295 287,290 C 289,285 292,281 295,277 C 298,273 302,270 306,267 C 310,264 314,261 318,258 C 322,255 326,252 330,249 C 334,246 338,243 342,241 C 346,239 350,237 354,236 C 358,235 362,234 366,234 C 370,234 374,235 378,237 C 382,239 386,242 389,245 C 392,248 394,252 396,256 C 398,260 399,264 400,268 C 401,272 401,276 400,280 C 399,284 397,288 394,292 C 391,296 388,299 384,302 C 380,305 376,308 372,310 C 368,312 364,314 360,315 C 356,316 352,317 348,317 C 344,317 340,316 336,314 C 332,312 328,309 325,305 C 322,301 319,297 317,292 C 315,287 314,282 313,277 C 312,272 312,267 313,262 C 314,257 316,252 319,247 C 322,242 325,238 329,234 C 333,230 337,226 341,223 C 345,220 349,217 353,215 C 357,213 361,211 365,210 C 369,209 373,209 377,209 C 381,209 385,210 388,212 C 391,214 393,217 395,221 C 397,225 398,229 398,233 C 398,237 397,241 395,244 C 393,247 390,250 386,252 C 382,254 378,255 374,255 C 370,255 366,254 363,252 C 360,250 357,247 355,244 C 353,241 352,237 352,233 C 352,229 353,225 355,222 C 357,219 360,216 363,214 C 366,212 370,211 373,211 C 376,211 379,212 382,214 C 385,216 387,219 388,222 C 389,225 389,228 388,231 C 387,234 385,237 382,239 C 379,241 376,242 373,242 C 370,242 367,241 365,239 C 363,237 362,234 362,231 C 362,228 363,225 365,223 C 367,221 370,220 373,220 Z";
import { LeafEmblem } from "../components/Footer";
const purposes = [
  "Tree Plantation Drive",
  "Education for Tribal Children",
  "Clean Water Initiative",
  "Healthcare Camps",
  "Women Empowerment",
  "Disaster Relief",
  "General Fund",
  "Other",
];

const currencies = ["INR ₹", "USD $", "EUR €", "GBP £"];
const quickAmounts = [500, 1000, 2500, 5000, 10000];

export const Donate = () => {
  const Razorpay = useRazorpay()
  const [form, setForm] = useState({
    name: "", email: "", phone: "", amount: "", currency: "INR ₹",
    purpose: "", message: "",
  });
  const [activeAmount, setActiveAmount] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [donorId, setDonorId] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // 1. Create Razorpay order first
      const orderResponse = await fetch("https://sjkf-backend-api-production.up.railway.app/api/donations/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(form.amount),
        }),
      });

      const orderResult = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderResult.message || "Failed to create Razorpay order");
      }

      // 2. Open Razorpay checkout
      const options = {
        key: orderResult.keyId,
        amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        name: "Swastika Jan Kalyan Foundation",
        description: "Donation",
        order_id: orderResult.order.id,

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        handler: async function (razorpayResponse) {
          try {
            // 3. Verify payment and save donation only after successful payment
            const response = await fetch("https://sjkf-backend-api-production.up.railway.app/api/donations/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: razorpayResponse.razorpay_order_id,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_signature: razorpayResponse.razorpay_signature,

                fullName: form.name,
                email: form.email,
                phoneNumber: form.phone,
                amount: Number(form.amount),
                currency: form.currency,
                donationPurpose: form.purpose,
                message: form.message,
                isAnonymous: false,
              }),
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(result.message || "Something went wrong");
            }
            setIsLoading(false);
            // ✅ STORE IDs IN STATE
            setDonorId(result.data.donorId);
            setTransactionId(result.data.transactionId);

            // ✅ ONLY AFTER RAZORPAY PAYMENT SUCCESS + BACKEND VERIFICATION
            setSubmitted(true);

            console.log("Donor ID:", result.data.donorId);
            console.log("Transaction ID:", result.data.transactionId);
            console.log("Razorpay Payment ID:", result.data.gatewayTransactionId);
          } catch (error) {
            console.error("Verification Error:", error.message);
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed by user");
          },
        },

        theme: {
          color: "#2e7d32",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Error:", error.message);
      
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

        .input-field {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input-field:focus {
          border-color: #2d6a4f !important;
          box-shadow: 0 0 0 3px rgba(45,106,79,0.12);
          outline: none;
        }
        .input-field::placeholder { color: #9ca3af; }

        .quick-amt { transition: all 0.18s ease; }
        .quick-amt:hover { transform: translateY(-2px); }

        .submit-btn {
          background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .submit-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 12px 32px rgba(45,106,79,0.35);
        }

        .volunteer-btn {
          transition: all 0.2s ease;
        }
        .volunteer-btn:hover {
          background: #2d6a4f !important;
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(45,106,79,0.25);
        }

        .leaf-spin { animation: leafFloat 6s ease-in-out infinite; }
        @keyframes leafFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(8deg); }
        }

        .map-glow { filter: drop-shadow(0 0 18px rgba(45,106,79,0.25)); }
        .map-pulse { animation: mapPulse 4s ease-in-out infinite; }
        @keyframes mapPulse {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.22; }
        }

        .form-card-enter { animation: formSlide 0.5s cubic-bezier(0.34,1.2,0.64,1) both; }
        @keyframes formSlide {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        select option { background: #fff; color: #1a2e1a; }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%)", padding: "56px 24px 64px" }}>
        {/* Dashed rings */}
        <svg className="absolute right-12 top-6 opacity-10 pointer-events-none" width="220" height="220" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="100" stroke="white" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="110" cy="110" r="72" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="110" cy="110" r="44" stroke="white" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
        <svg className="absolute left-8 bottom-0 opacity-10 pointer-events-none" width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="70" stroke="white" strokeWidth="1.5" strokeDasharray="6 5" />
          <circle cx="80" cy="80" r="45" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Floating leaves */}
        <div className="leaf-spin absolute top-8 left-1/4 text-3xl pointer-events-none" style={{ animationDelay: "0s" }}>🌿</div>
        <div className="leaf-spin absolute bottom-8 right-1/4 text-2xl pointer-events-none" style={{ animationDelay: "2s" }}>🍃</div>
        <div className="leaf-spin absolute top-12 right-1/3 text-xl pointer-events-none" style={{ animationDelay: "4s" }}>🌱</div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            <span className="text-xs font-bold text-green-100 tracking-widest uppercase">Make a Difference Today</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Your Generosity<br />
            <span className="text-green-300">Plants Tomorrow</span>
          </h1>
          <p className="text-green-100 text-base max-w-xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
            Every rupee you donate goes directly to the ground — to forests, children, and communities that need it most.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[["₹8.6M+", "Total Raised"], ["12,000+", "Lives Impacted"], ["5,000+", "Trees Planted"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-black text-white">{val}</p>
                <p className="text-xs text-green-200 uppercase tracking-widest font-semibold">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy divider */}
      <div style={{ marginTop: -2 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0 0 C240 60 480 60 720 30 C960 0 1200 0 1440 40 L1440 0 Z" fill="#40916c" />
          <path d="M0 0 C360 50 720 50 1080 20 C1260 5 1380 15 1440 30 L1440 0 Z" fill="#2d6a4f" />
          <path d="M0 0 C480 40 960 40 1440 0 L1440 0 Z" fill="#f8faf8" />
        </svg>
      </div>

      {/* ── MAIN TWO-COLUMN SECTION ── */}
      <div className="max-w-6xl mx-auto px-4 pb-0" style={{ marginTop: -8 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: INDIA MAP FRAME + INFO ── */}
          <div className="flex flex-col items-center gap-8 pt-4">

            {/* India Map Frame */}


            {/* Left info block */}
            <div className="w-full rounded-3xl p-8 mt-4" style={{ background: "linear-gradient(135deg, #f0faf4, #e4f5eb)", border: "1px solid rgba(45,106,79,0.13)" }}>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-black text-[#1a2e1a] mb-3 leading-snug">
                Why Your Donation<br /><span className="text-[#2d6a4f]">Matters</span>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                We operate with zero administrative overhead on donations below ₹10,000. Every contribution is tracked, reported, and celebrated.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { emoji: "🌳", label: "₹500", desc: "Plants 5 native saplings" },
                  { emoji: "📚", label: "₹1,000", desc: "Funds school supplies for 2 children" },
                  { emoji: "💧", label: "₹2,500", desc: "Provides clean water for a family for 1 month" },
                  { emoji: "🏥", label: "₹5,000", desc: "Covers medical check-up for 3 families" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(45,106,79,0.1)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "rgba(45,106,79,0.1)" }}>
                      {item.emoji}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#1b4332]">{item.label}</span>
                      <span className="text-xs text-gray-500 ml-2">— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: "1px solid rgba(45,106,79,0.1)" }}>
                {["80G Certified", "12A Registered", "100% Transparent"].map((b) => (
                  <span key={b} className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "#e8f5ee", color: "#2d6a4f", border: "1px solid rgba(45,106,79,0.18)" }}>
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: DONATION FORM ── */}
          <div className="form-card-enter">
            {/* Sticky label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: "rgba(45,106,79,0.2)" }} />
              <span className="text-xs font-bold tracking-widest uppercase text-[#2d6a4f]">Donation Form</span>
              <div className="h-px flex-1" style={{ background: "rgba(45,106,79,0.2)" }} />
            </div>

            <div className="rounded-3xl p-8 md:p-10 shadow-xl" style={{ background: "#ffffff", border: "1px solid rgba(45,106,79,0.10)", boxShadow: "0 8px 48px rgba(45,106,79,0.10), 0 1px 3px rgba(0,0,0,0.04)" }}>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4" style={{ minHeight: "100vh", fontFamily: "'Sora', sans-serif", borderRadius: "100px" }}>
                  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
    @keyframes cardIn { from{opacity:0;transform:translateY(32px) scale(0.95)} to{opacity:1;transform:translateY(0) scale(1)} }
    @keyframes popIn { from{opacity:0;transform:scale(0.4)} to{opacity:1;transform:scale(1)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    .don-btn:hover { transform:translateY(-2px) !important; box-shadow:0 10px 28px rgba(45,106,79,0.45) !important; }
    .don-btn:active { transform:scale(0.97) !important; }
  `}</style>

                  <div style={{ background: "#F2EDE9", borderRadius: 28, padding: "3.5rem 2.5rem 2.5rem", maxWidth: 460, width: "100%", textAlign: "center", position: "relative", overflow: "hidden", animation: "cardIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>

                    {/* Blobs */}
                    <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(82,183,136,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: -40, left: -40, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle,rgba(45,106,79,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />

                    {/* Leaf deco */}
                    <svg style={{ position: "absolute", top: 18, right: 22, opacity: 0.18 }} width="90" height="90" viewBox="0 0 90 90" fill="none">
                      <ellipse cx="55" cy="35" rx="32" ry="20" fill="#2d6a4f" transform="rotate(-30 55 35)" />
                      <line x1="55" y1="55" x2="30" y2="80" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>

                    {/* Icon */}
                    <div style={{ width: 84, height: 84, borderRadius: "50%", background: "linear-gradient(145deg,#e8f5ee,#c8ead8)", border: "3px solid rgba(82,183,136,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.75rem", fontSize: 38, boxShadow: "0 12px 32px rgba(45,106,79,0.2), 0 0 0 8px rgba(82,183,136,0.1)", animation: "popIn 0.5s 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}>
                      <LeafEmblem />
                    </div>

                    <h2 style={{ fontSize: 27, fontWeight: 800, color: "#1b4332", margin: "0 0 0.4rem", letterSpacing: "-0.5px", animation: "fadeUp 0.5s 0.5s both" }}>
                      Thank You, {form.name.split(" ")[0] || "Friend"}!
                    </h2>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#52b788", fontWeight: 500, letterSpacing: "0.6px", margin: "0 0 1.1rem", animation: "fadeUp 0.5s 0.6s both" }}>
                      Donation Received
                    </p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, color: "#4a7c63", lineHeight: 1.75, margin: "0 0 1.5rem", animation: "fadeUp 0.5s 0.7s both" }}>
                      Your donation is submitted. You'll receive a confirmation on <strong style={{ color: "#1b4332", fontWeight: 600 }}>{form.email}</strong>.<br />
                      Every rupee will find its purpose.
                    </p>

                    {/* ID Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "0 0 2rem", animation: "fadeUp 0.5s 0.8s both" }}>
                      {[{ label: "Donor ID", value: donorId }, { label: "Transaction ID", value: transactionId }].map(({ label, value }) => (
                        <div key={label} style={{ background: "linear-gradient(135deg,#f0faf5,#e8f5ee)", border: "1.5px solid rgba(82,183,136,0.28)", borderRadius: 14, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 4, textAlign: "left" }}>
                          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2, color: "#52b788", textTransform: "uppercase" }}>{label}</span>
                          <span style={{ fontFamily: "monospace", fontSize: 11.5, fontWeight: 700, color: "#1b4332", letterSpacing: "0.3px", wordBreak: "break-all", lineHeight: 1.4 }}>{value}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="don-btn"
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", amount: "", currency: "INR ₹", purpose: "", message: "" }); setActiveAmount(null); }}
                      style={{ background: "linear-gradient(135deg,#2d6a4f,#40916c)", color: "white", border: "none", borderRadius: 30, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", letterSpacing: "0.3px", transition: "all 0.2s", boxShadow: "0 6px 20px rgba(45,106,79,0.35)", display: "inline-flex", alignItems: "center", gap: 8, animation: "fadeUp 0.5s 0.9s both" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Make Another Donation
                    </button>

                    <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "1.75rem", animation: "fadeUp 0.5s 1s both" }}>
                      <div style={{ width: 6, height: 6, borderRadius: 3, background: "#b7e4c7" }} />
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b7e4c7" }} />
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b7e4c7" }} />
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Full Name *</label>
                      <input required value={form.name} onChange={e => set("name", e.target.value)}
                        placeholder="Arjun Sharma"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium"
                        style={{ border: "1.5px solid #e5e7eb", background: "#fafff9" }} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => set("email", e.target.value)}
                        placeholder="arjun@email.com"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium"
                        style={{ border: "1.5px solid #e5e7eb", background: "#fafff9" }} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="flex items-center px-3 rounded-xl text-sm font-semibold text-[#2d6a4f] flex-shrink-0"
                        style={{ border: "1.5px solid #e5e7eb", background: "#f0faf4" }}>+91</div>
                      <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                        placeholder="98765 43210"
                        className="input-field flex-1 px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium"
                        style={{ border: "1.5px solid #e5e7eb", background: "#fafff9" }} />
                    </div>
                  </div>

                  {/* Quick amounts */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Quick Select Amount</label>
                    <div className="flex flex-wrap gap-2">
                      {quickAmounts.map((amt) => (
                        <button key={amt} type="button"
                          onClick={() => { setActiveAmount(amt); set("amount", String(amt)); }}
                          className="quick-amt px-4 py-2 rounded-xl text-sm font-bold border-none cursor-pointer"
                          style={{
                            background: activeAmount === amt ? "linear-gradient(135deg,#2d6a4f,#40916c)" : "#f0faf4",
                            color: activeAmount === amt ? "#fff" : "#2d6a4f",
                            border: activeAmount === amt ? "1.5px solid #2d6a4f" : "1.5px solid rgba(45,106,79,0.2)",
                            boxShadow: activeAmount === amt ? "0 4px 14px rgba(45,106,79,0.3)" : "none",
                          }}>
                          ₹{amt.toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount + Currency */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Amount *</label>
                      <input required type="number" min="1" value={form.amount}
                        onChange={e => { set("amount", e.target.value); setActiveAmount(null); }}
                        placeholder="Enter amount"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium"
                        style={{ border: "1.5px solid #e5e7eb", background: "#fafff9" }} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Currency</label>
                      <select value={form.currency} onChange={e => set("currency", e.target.value)}
                        className="input-field w-full px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium cursor-pointer"
                        style={{ border: "1.5px solid #e5e7eb", background: "#fafff9", appearance: "none" }}>
                        {currencies.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Donation Purpose *</label>
                    <select required value={form.purpose} onChange={e => set("purpose", e.target.value)}
                      className="input-field w-full px-4 py-3 rounded-xl text-sm font-medium cursor-pointer"
                      style={{ border: "1.5px solid #e5e7eb", background: "#fafff9", color: form.purpose ? "#1a2e1a" : "#9ca3af", appearance: "none" }}>
                      <option value="">Select a cause...</option>
                      {purposes.map(p => <option key={p} style={{ color: "#1a2e1a" }}>{p}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#374151] uppercase tracking-wider">Custom Message <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span></label>
                    <textarea value={form.message} onChange={e => set("message", e.target.value)}
                      placeholder="Share why you're donating, or a message of hope for the community..."
                      rows={3}
                      className="input-field w-full px-4 py-3 rounded-xl text-sm text-[#1a2e1a] font-medium resize-none"
                      style={{ border: "1.5px solid #e5e7eb", background: "#fafff9" }} />
                  </div>

                  {/* Amount preview */}
                  {form.amount && (
                    <div className="flex items-center justify-between px-5 py-3 rounded-2xl" style={{ background: "linear-gradient(135deg,#f0faf4,#e4f5eb)", border: "1px solid rgba(45,106,79,0.15)" }}>
                      <span className="text-sm text-gray-600">You are donating</span>
                      <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-black text-[#2d6a4f]">
                        {form.currency.split(" ")[1] || "₹"}{Number(form.amount).toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" className="submit-btn" disabled={isLoading}
                style={{
                  width: "100%", padding: "15px", borderRadius: 14, border: "none",
                  background: isLoading
                    ? "linear-gradient(90deg,#2d4a3e 0%,#3a6b54 50%,#4a7a65 100%)"
                    : "linear-gradient(90deg,#1b4332 0%,#2d6a4f 50%,#40916c 100%)",
                  color: "white", fontSize: 16, fontWeight: 700,
                  cursor: isLoading ? "not-allowed" : "pointer",
                  fontFamily: "Sora, sans-serif", letterSpacing: "0.02em",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s",
                  opacity: isLoading ? 0.85 : 1,
                }}>
                {isLoading ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      style={{ animation: "spin 0.9s linear infinite", flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
                      <path d="M10 2a8 8 0 0 1 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    Donating…
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Donate Now
                  </>
                )}
              </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Secured with 256-bit SSL encryption. Tax receipt will be emailed automatically.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

   

      {/* ── VOLUNTEER CTA SECTION ── */}
      <div className="max-w-6xl mx-auto px-4 mt-16 pb-16">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14"
          style={{ background: "linear-gradient(135deg, #f0faf4 0%, #e4f5eb 50%, #d8efe0 100%)", border: "1px solid rgba(45,106,79,0.15)", boxShadow: "0 8px 40px rgba(45,106,79,0.08)" }}>

          {/* SVG decoration */}
          <svg className="absolute right-0 top-0 h-full opacity-10 pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 260 }}>
            <circle cx="200" cy="150" r="140" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="8 6" />
            <circle cx="200" cy="150" r="100" stroke="#2d6a4f" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="150" r="60" stroke="#2d6a4f" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="200" cy="150" r="25" fill="#2d6a4f" opacity="0.15" />
          </svg>
          <svg className="absolute left-0 bottom-0 opacity-10 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 180, height: 180 }}>
            <path d="M20 180 C20 120 80 80 140 80 C80 80 80 20 140 20" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="6 4" />
            <path d="M40 180 C40 130 90 100 150 100" stroke="#40916c" strokeWidth="1" strokeDasharray="4 3" />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5 flex-1">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg"
                style={{ background: "linear-gradient(135deg, #2d6a4f, #40916c)" }}>
                🤝
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2d6a4f]">Join the Movement</span>
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl md:text-3xl font-black text-[#1a2e1a] mb-2 leading-tight">
                  Want to do more than donate?<br />
                  <span className="text-[#2d6a4f]">Become a Volunteer.</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Your time and skills are just as valuable as money. Join our community of 200+ active volunteers across Jharkhand — planting, teaching, building, and transforming lives.
                </p>
                {/* Mini perks */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Weekend Drives", "Skill-based Projects", "Certificate of Service", "Community Events"].map(perk => (
                    <span key={perk} className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(45,106,79,0.1)", color: "#2d6a4f", border: "1px solid rgba(45,106,79,0.2)" }}>
                      ✦ {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="https://swastikajankalyanfoundation.netlify.app/volunteerwus" className="volunteer-btn px-8 py-4 rounded-2xl font-bold text-sm text-[#2d6a4f] cursor-pointer"
                style={{ background: "#ffffff", border: "2px solid #2d6a4f", letterSpacing: "0.03em" }}>
                Register as Volunteer →
              </a>
              <button className="px-8 py-3 rounded-2xl font-semibold text-xs text-gray-500 cursor-pointer border-none"
                style={{ background: "transparent", textDecoration: "underline", textDecorationColor: "rgba(107,114,128,0.4)" }}>
                Learn more about volunteering
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};