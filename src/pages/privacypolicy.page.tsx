import BackButton from "../components/common/BackButton";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#000] flex justify-center h-full">
      <div className="w-full max-w-3xl px-6 py-[4.75rem]">
        <div className="flex flex-col gap-14">
          <div>
            <BackButton />
            <p className="text-white text-4xl font-bold leading-[125%] mt-8 mb-9">
              プライバシーポリシー
            </p>
            <div className="pt-8 pb-9 flex flex-col gap-4 border-y border-white border-opacity-15">
              <p className="text-white text-base font-normal leading-[125%]">
                UDATA株式会社（以下「当社」といいます。）は、当社がU-LOG（以下「本サービス」といいます。）を提供するにあたり、ご利用される皆様（以下「利用者」といいます。）の個人に関する情報（以下「個人情報」といいます。）を取得します。
              </p>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第1条（適用範囲）
              </p>
              <p className="text-white text-base font-normal leading-[125%]">
                本プライバシーポリシー（以下「本ポリシー」といいます。）は、当社が利用者から個人情報を取得、利用及び管理するときに適用されます。
              </p>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第2条（取得する情報）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  当社は、利用者から以下の情報を取得します。
                </p>
                <ol className="custom-ol">
                  <li>連絡先</li>
                  <li>情報通信端末の機体識別に関する情報</li>
                  <li>位置情報</li>
                  <li>IPアドレス</li>
                  <li>閲覧したURL及び日時に関するタイムスタンプ</li>
                  <li>動画情報</li>
                </ol>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第3条（利用目的）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  当社が個人情報を収集・利用する目的は、以下のとおりです。
                </p>
                <ol className="custom-ol">
                  <li>本サービスの提供・運営のため</li>
                  <li>本サービスの運営上必要な事項の通知のため</li>
                  <li>本サービスの会員であるお客様の管理のため</li>
                  <li>本サービスに関する新機能、更新情報をお知らせするため</li>
                  <li>メールマガジンの送信、ダイレクトメールの送付のため</li>
                  <li>広告効果の分析、市場分析、マーケティングのため</li>
                  <li>キャンペーン、懸賞企画、アンケートの実施のため</li>
                  <li>本サービスの各種問合せ、アフターサービス対応のため</li>
                  <li>不正アクセス、不正利用の防止のため</li>
                  <li>本サービスその他のコンテンツの開発・改善のため</li>
                  <li>当社が実施するサービス又は企画に関する連絡のため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ol>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第4条（Cookieの利用）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                当社は、ウェブサイト及び本サービス（以下、これらを総称して「ウェブサイト等」といいます。）のアクセス及び利用状況の分析、広告配信並びにウェブサイト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信端末に保存されるCookie等のファイル及びこれに類似する技術を取得することがあります。当社は、Cookie等と利用者の個人情報を関連付けることがあります。当社は、利用者の個人情報と関連付けたCookie等が利用者の個人情報であることに鑑み、当該Cookie等を本ポリシーの定めに従って管理いたします。また、当社は、Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォームに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びその分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信等の目的で利用することがあります。
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第5条 （安全確保の措置）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  当社は、収集した情報の漏えい、滅失又はき損の防止その他収集した情報の適切な管理のために必要な措置を講じます。当社が、安全管理のために講じた措置の概要は以下のとおりです。措置の具体的内容については、本ポリシーで定める窓口に対する利用者からの求めに応じて遅滞なく回答いたします。
                </p>
                <ol className="custom-ol">
                  <li>基本方針の策定、個人情報の取扱いに係る規律の整備</li>
                  <li>定期的な研修の実施</li>
                  <li>個人情報を取り扱うことのできる機器やアクセス権者を明確にし、個人情報への不要なアクセスを防止</li>
                  <li>メール等により取扱う際に、パスワードを設定</li>
                  <li> 個人情報を取り扱う機器等のOSを最新の状態に保持</li>
                </ol>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第6条 （個人情報の第三者への提供）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  1 当社は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ないで、取得した個人情報を第三者に提供することはありません。
                </p>
                <ol className="custom-ol">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体又は財産の保護のために必要がある場合であって、利用者の同意を得ることが困難であるとき。</li>
                  <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難であるとき。</li>
                  <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
                  <li> その他法令で第三者提供の制限の例外が認められている場合</li>
                </ol>
                <p>
                  2 前項の定めにかかわらず、次に掲げる場合には、当該個人情報の提供先は第三者に該当しないものとします。
                </p>
                <ol className="custom-ol">
                  <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託することに伴って当該個人情報が提供される場合</li>
                  <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  <li>第7条に定める共同利用者に対して提供される場合</li>
                </ol>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第7条 （個人情報の共同利用）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                当社は、特定の者との間で共同利用することを目的として個人情報を当該特定の者に提供することがあります。この場合、当社は、あらかじめ、共同して利用する個人情報の項目、共同して利用する者の範囲、利用する者の利用目的及び当該個人情報の管理について責任を有する者の氏名又は名称及び住所並びに法人にあっては、その代表者の氏名を公表するものとします。
                </p>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第8条 （本プライバシーポリシーの変更）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  当社は、法令改正への対応の必要性及び事業上の必要性に応じて、本ポリシーを変更する場合があります。本ポリシーの変更を行った場合には、本ウェブサイト上に掲載します。
                </p>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第9条 （開示、訂正等の手続）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  1 利用者は、本条及び当社の関連規程に従って、当社に対し、個人情報保護法において認められる限度で、以下の求め又は請求を行うことができます。
                </p>
                <ol className="custom-ol">
                  <li>個人情報の利用目的の通知の求め</li>
                  <li>個人情報又は第三者提供記録の開示の請求</li>
                  <li>個人情報の訂正、追加又は削除の請求</li>
                  <li>個人情報の利用の停止の請求</li>
                  <li>個人情報の第三者への提供の停止の請求</li>
                </ol>
                <p>
                  2 前項の求め又は請求にあたっては、同項各号のうちいずれの請求か特定の上、本人確認のための書類（運転免許証、健康保険証、住民票の写し等）をご提出頂きます。
                </p>
                <p>
                  3 第1項第1号の求め又は第2号の請求については、1件につき、1,000円の手数料をご負担頂きますのであらかじめご了承ください。
                </p>
              </div>
              <p className="text-white text-2xl font-normal leading-[125%]">
                第10条 （お問い合わせ）
              </p>
              <div className="text-white text-base font-normal leading-[125%]">
                <p>
                  当社の個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、下記の窓口にご連絡ください。
                </p>
              </div>
            </div>
            <div className="pt-8 text-white font-normal text-base leading-[125%]">
              <p>
                当社の個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、下記の窓口にご連絡ください。
              </p>
              <p>
                個人情報取扱事業者：UDATA株式会社
              </p>
              <p>
                代表者名：田原口光太
              </p>
              <p>
                住所：〒170-0013 東京都豊島区東池袋１丁目３４−５ いちご東池袋ビル ６階
              </p>
              <p>
                Eメールアドレス：info@udata.co.jp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
