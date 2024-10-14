import React from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Setting = () => {
    return (
        <PrimaryLayout>
            <section className="pt-5 px-4 bg-white-smoke w-full">
                <div>
                    <Link href="#" className="flex items-center">
                        <Image
                            src="images/arrow-left.svg"
                            width={20}
                            height={20}
                            alt="go back"
                            className="mr-3"
                        />
                        <span className="font-semibold text-primary-blue">Go Back</span>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-xl mt-6">
                    <h6 className="text-black-primary font-semibold border-b border-borderPrimary pb-3">Setting</h6>
                    <h6 className="text-black-primary font-bold pt-6 pb-3">Your install Code</h6>
                    <p>Success! Please copy and paste the code below in your site's html and you'll be set.</p>
                    <p>Preferably as close as possible to the open <span className="font-semibold text-black-primary">head</span> tag but anywhere will work.</p>
                    <div className="border border-borderPrimary bg-gray-table-bg py-3 px-4 rounded-lg text-gray-dark mt-6">
                        <pre>
                            {`<!-- Alium Analytics -->
<script>
(function(a,l,i,u,m){
    a[u] = a[u] || [];
    var f = l.getElementsByTagName('script')[0],
    j = l.createElement('script');
    j.async = true;
    j.src = m;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'alium', 'https://assets.alium.co.in/cmmn/ccrjs/ccrjs_69.js');
</script>
<!-- Alium Analytics -->`}
                        </pre>
                    </div>
                    <div className="w-fit mt-6">
                        <Button size="sm" className="hover hover-secondary">
                            Copy to Snippet
                        </Button>
                    </div>
                </div>
            </section>
        </PrimaryLayout>
    )
}

export default Setting
