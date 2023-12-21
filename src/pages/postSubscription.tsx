import React, { useRef } from "react";
import Link from "next/link";
import { api } from "~/utils/api";
import { useRouter } from "next/navigation";

export const postSubscription = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const overviewRef = useRef<HTMLTextAreaElement>(null);
  const feeRef = useRef<HTMLInputElement>(null);
  const frequencyRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const contractedAtRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const route = useRouter();

  const postSubscription = api.post.postSubscription.useMutation();

  // 投稿関数
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;

    // ifに入れないとエラーが出るため
    if (
      nameRef.current &&
      overviewRef.current &&
      feeRef.current &&
      frequencyRef.current &&
      frequencyRef.current &&
      urlRef.current &&
      contractedAtRef.current &&
      imageRef.current
    ) {
      postSubscription.mutate({
        name: nameRef.current.value,
        overview: overviewRef.current.value,
        fee: parseInt(feeRef.current.value),
        frequency: parseInt(frequencyRef.current.value),
        url: urlRef.current.value,
        contracted_at: new Date(contractedAtRef.current.value),
        image: imageRef.current?.value || "", // 空欄を許容
      });
    }
    route.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Subscription</span>{" "}
          Management App
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-800"
              htmlFor="title"
            >
              サブスクリプション名
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="サブスクリプション名を入力"
              ref={nameRef}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-800"
              htmlFor="description"
            >
              サブスクリプション内容
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="overview"
              placeholder="概要を入力"
              ref={overviewRef}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-800"
              htmlFor="fee"
            >
              料金
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="fee"
              type="number"
              placeholder="料金を入力"
              ref={feeRef}
            />
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-800"
                htmlFor="frequency"
              >
                課金頻度
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="frequency"
                type="number"
                placeholder="課金頻度を入力"
                ref={frequencyRef}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-800"
                htmlFor="url"
              >
                課金URL
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="url"
                type="url"
                placeholder="URLを入力"
                ref={urlRef}
              />
            </div>{" "}
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-800"
                htmlFor="contractedAt"
              >
                契約日
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="contractedAt"
                type="date"
                ref={contractedAtRef}
              />
            </div>{" "}
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-800"
                htmlFor="image"
              >
                画像URL
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="image"
                type="url"
                placeholder="画像URLを入力"
                ref={imageRef}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700 focus:outline-none"
              type="submit"
            >
              投稿する
            </button>
            <Link
              href="/"
              className="inline-block align-baseline text-sm font-bold text-orange-500 hover:text-orange-800"
            >
              キャンセル
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
export default postSubscription;
