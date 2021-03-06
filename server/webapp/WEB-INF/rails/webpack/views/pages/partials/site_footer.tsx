/*
 * Copyright 2018 ThoughtWorks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {MithrilViewComponent} from "jsx/mithril-component";
import * as m from "mithril";
import * as styles from './site_footer.scss';

export interface Attrs {
  copyrightYear: string;
  goVersion: string;
  fullVersion: string;
  formattedVersion: string;
}

export class SiteFooter extends MithrilViewComponent<Attrs> {
  view(vnode: m.Vnode<Attrs>) {

    return <div className={styles.footer}>
      <div class={styles.left}>
        <p class={styles.content}>Copyright &copy; {vnode.attrs.copyrightYear}&nbsp;
          <a href="https://www.thoughtworks.com/products" target="_blank">ThoughtWorks, Inc.</a>
          &nbsp;Licensed under&nbsp;
          <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">
            Apache License, Version 2.0
          </a>.
          Go includes&nbsp;
          <a href={`/go/assets/dependency-license-report-${vnode.attrs.fullVersion}`} target="_blank">
            third-party software
          </a>.
          Go Version: {vnode.attrs.formattedVersion}.
        </p>
      </div>
      <div class={styles.right}>
        <div class={styles.social}>
          <a href="https://twitter.com/goforcd" title="twitter" class={styles.twitter} target="_blank"/>
          <a href="https://github.com/gocd/gocd" title="github" class={styles.github} target="_blank"/>
          <a href="https://groups.google.com/d/forum/go-cd" title="forums" class={styles.forums} target="_blank"/>
          <a href={`https://docs.gocd.org/${vnode.attrs.goVersion}`} title="documentation" class={styles.documentation}
             target="_blank"/>
          <a href="https://www.gocd.org/plugins/" title="plugins" class={styles.plugins} target="_blank"/>
          <a href={`https://api.gocd.org/${vnode.attrs.goVersion}`} title="api" class={styles.api} target="_blank"/>
          <a href="/go/about" title="about" class={styles.serverDetails} target="_blank"/>
          <a href="/go/cctray.xml" title="cctray" class={styles.cctray} target="_blank"/>
        </div>
      </div>
    </div>;
  }
}
